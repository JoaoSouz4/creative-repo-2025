import dev from '../../assets/autor.jpeg';
import { RiCodeView } from "react-icons/ri";
import { FaCakeCandles } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { AtomicElectron } from './components/atomic-eletron';
import { BsType } from 'react-icons/bs';

export function About(){
    return (
        <div>
            <section>
                <div className = 'flex justify-between gap-8 '>

                    <div className = 'animate-fly w-[40%] shrink-0 border border-teal-100 shadow-xl shadow-teal-500/20  rounded-2xl  p-4'>
                        <img
                            className = 'rounded-2xl object-cover'
                            src={dev}
                        />
                        <ul className = ''>
                            <li className = 'font-bold text-lg text-center my-2 text-gray-600'>João Souza</li>
                            <div className = ' flex flex-col gap-2 text-black/50 text-sm'>
                                <li className = 'flex items-center gap-2'>
                                    <RiCodeView className = 'text-teal-500'/>
                                    Dev Full Stack | TS | C#
                                </li>
                                <li className = 'flex items-center gap-2'>
                                    <FaCakeCandles className = 'text-teal-500'/>
                                    31/10/2002 - 23y
                                </li>

                                <li className = 'flex items-center gap-2'>
                                    <PiStudentFill className = 'text-teal-500'/>
                                    Bacharel S.I 6/8 | Estácio
                                </li>

                                <li className = 'flex items-center gap-2'>
                                    <TbWorldWww className = 'text-teal-500 '/>
                                    <div className = ''>Meu portfólio</div>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div className = 'grow'>
                        <div className = 'flex flex-col gap-4'>
                            <h1 className = 'text-gray-600 text-3xl font-bold'>
                                Mais do que um <strong className = 'text-teal-500'>Hobby</strong>
                            </h1>

                            <p className='text-gray-600'> 
                                Olá! Meu nome é João — sou programador e ilustrador autônomo. 
                                Tenho buscado constantemente aprimorar minhas habilidades em programação e, 
                                nesse processo, tive a ideia de unir duas das minhas maiores paixões: programar e ilustrar. 
                                <br />
                                Sempre fui fascinado por ficção — seja em livros, quadrinhos, animações, filmes ou séries — e por
                                tudo que envolve mundos fantásticos. Gosto de representar esse universo através dos meus desenhos,
                                explorando técnicas e estilos inspirados nos artistas que mais admiro. 
                                <br />
                                Este site nasceu não apenas como um projeto pessoal, mas como um repositório criativo — um espaço onde
                                posso reunir, compartilhar e dar vida a um hobby que se tornou parte importante de quem eu sou. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className = 'flex items-center justify-between mt-8'>
                <div className = 'w-[70%] mt-4 flex flex-col gap-2'>
                    <h1 className = 'text-gray-600 text-2xl font-bold'>
                        Sobre o <strong className = 'text-teal-500'>projeto</strong>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas voluptates facere hic voluptatum error veniam,
                        sequi odit vel, fugiat minima accusantium provident non
                        saepe, doloribus tenetur velit aliquam alias debitis!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas voluptates facere hic voluptatum error veniam,
                        sequi odit vel, fugiat minima accusantium provident non
                        saepe, doloribus tenetur velit aliquam alias debitis!
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4 ">
                    <h1 className="text-center text-sm font-semibold">
                        Ferramentas Utilizadas
                    </h1>

                    <div className="relative w-38 h-38 border border-teal-300/50 rounded-full flex items-center justify-center">   
                        <AtomicElectron icon = {FaReact} delay='4s'/>
                        <AtomicElectron icon = {BiLogoTypescript} delay='2s'/>
                        <AtomicElectron icon = {RiTailwindCssFill} delay='0s'/>
                    </div>
                </div>
            </section>  
        </div>
    )
}