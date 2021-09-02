import React, {useRef, useEffect } from 'react'
import './Slide.css'
import styled from 'styled-components'
import img from '../Slide/img/pub.jpg'
import img1 from '../Slide/img/pub1.jpg'
import img2 from '../Slide/img/pub2.jpg'
import img3 from '../Slide/img/pub3.jpg'

// import SetaDireita from './img/next.png'
// import SetaEsquerda  from './img/tras.png'





function Slide(){

    const slides = useRef(null)
    const intervaloSlides = useRef(null)

    const anterior = () => {
     if(slides.current.children.length > 0){

        const index = slides.current.children.length - 1;
        const ultimoElemento = slides.current.children[index]

        slides.current.insertBefore(ultimoElemento, slides.current.firstChild)

        slides.current.style.transition = 'none'
        const tamanhoSlide = slides.current.children[0].offsetWidth;
        slides.current.style.tranform = `translateX(-${tamanhoSlide}px)`

        setTimeout(() => {
            slides.current.style.transition = '3000ms ease-out all'
            slides.current.style.transform = `translateX(0)`
        }, 3000)
     }

      



    }
    const proximo = () => {
        if(slides.current.children.length > 0 ){
            const primeiroElemento = slides.current.children[0]

            slides.current.style.transition = `3000ms ease-out all`

            const tamanhoSlide = slides.current.children[0].offsetWidth;

            slides.current.style.transform = `translateX(-${tamanhoSlide}px)`


            const transicao = ()=>{

                slides.current.style.transition = 'none'
                slides.current.style.transform = `translateX(0)`

                slides.current.appendChild(primeiroElemento)
                slides.current.removeEventListener('transitionend', transicao)
            }

          slides.current.addEventListener('transitionend', transicao)


        }
    }

    useEffect(()=> {
       intervaloSlides.current  =  setInterval(()=>{
            proximo()
        }, 3000)


        slides.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlides.current)
        })    

        slides.current.addEventListener('mouseleave', () => {
            intervaloSlides.current  =  setInterval(()=>{
                proximo()
            }, 3000)
        })   

        return ()=>{
            clearInterval(intervaloSlides.current)   
        }

    }, [])


    return (
        <ContainerPrincipal>
                <ContainerSlide ref={slides}>

                            <SlideShow>
                            <a href="">
                            <img src={img} alt=""/>
                            </a>
                        
                            <TextoSlide>
                                <p>Rio de Janeiro-Rj</p>
                            </TextoSlide>

                            </SlideShow>


                

                        <SlideShow>

                        <a href="">
                            <img src={img1} alt=""/>
                            </a>
                    

                        <TextoSlide>
                            <p>São Paulo-Sp</p>
                        </TextoSlide>
                        </SlideShow>
                    

                        <SlideShow>
                            <a href="">
                            <img src={img2} alt=""/>
                            </a>
                        
                        

                        <TextoSlide>
                            <p>Curitiba-Pr</p>
                        </TextoSlide>
                        </SlideShow>
                

                        <SlideShow>
                        <a href="">
                            <img src={img3} alt=""/>
                            </a>
                    
                        <TextoSlide>
                            <p>Belém - Pa</p>
                        </TextoSlide>

                        </SlideShow>

                </ContainerSlide>
                

            <Controles>
                <Botoes onClick={anterior}>
                    {/* <img src={SetaEsquerda} alt="" />  */}
                </Botoes>

                <Botoes direito onClick={proximo}>
                    {/* <img src={SetaDireita} alt="" /> */}
                </Botoes>
            </Controles>

        </ContainerPrincipal>
    )
}
const ContainerPrincipal =  styled.div`
      position: relative;
`
const ContainerSlide = styled.div`
    display: flex;
   
     
`
const SlideShow = styled.div`
     min-width: 100%;
     overflow: hidden;
     transition: .3s ease all;
     z-index: 10;
     max-height: 600px;
     position: relative;

     img{
         width: 100%;
         vertical-align: top;
         
     }
`
const TextoSlide = styled.div`
    background: rgba(0,0,0,.5);
    color: #fff;
    width: 100%;
    height: 100px;
    padding: 15px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;
    font-family: badScript;
    font-size: 50px;

    @media screen and (max-width: 700px){
        position: relative;
        background: #000;
    }
`
const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index:20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`

const Botoes = styled.div`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px ;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover{
        background: rgba(0,0,0,.6);
    }


    ${props => props.direito ? 'right: 0' : 'left: 0'}


`
export default Slide