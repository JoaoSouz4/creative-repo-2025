import dev from '../assets/autor.jpeg';
import { RiCodeView } from "react-icons/ri";
import { FaCakeCandles } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";

export function About(){
    return (
        <div>
            <section>
                <div className = 'flex justify-between gap-4 '>

                    <div className = ' w-[40%] shrink-0 border shadow-md border-gray-300 rounded-2xl  p-4'>
                        <img
                            className = 'rounded-2xl object-cover'
                            src={dev}
                        />
                        <ul>
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
                            <h1 className = 'text-2xl font-bold'>Titulo</h1>
                            <p className = 'text-gray-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam, aspernatur ipsam dignissimos veniam illum nulla
                                tempore repellendus ab vero id exercitationem illo tempora
                                recusandae adipisci voluptate quasi accusamus natus eos?
                                <br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam, aspernatur ipsam dignissimos veniam illum nulla
                                tempore repellendus ab vero id exercitationem illo tempora
                                recusandae adipisci voluptate quasi accusamus natus eos?
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam, aspernatur ipsam dignissimos veniam illum nulla
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}