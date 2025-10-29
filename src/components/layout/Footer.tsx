import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer(){
    return (
        <footer className = 'mt-8 w-full bg-teal-950 px-8 py-8 flex justify-center'>
            <div className = 'w-[700px]'>
                <div className = 'flex justify-between items-start'>
                    <div className = 'relative text-white/90 text-2xl'>
                        <div className = 'font-modak text-sm'>Repositório Criativo</div>
                        <div className = 'font-dynalight text-sm text-white/90 absolute left-0 top-4 md:top-6'>
                            By: João Souza
                        </div>
                        <div className = 'text-xs text-white/50 mt-4 md:text-sm'>
                            Out 2025
                        </div>
                    </div>

                    <div className = 'text-white'>
                        <h2 className = 'text-sm md:text-xl font-bold'>Contato</h2>
                        <ul className = 'text-xs md:text-sm'>
                            <li className = 'text-white/50'>Email: joaosouz8@gmail.com</li>
                            <li className = 'text-white/50'>Telefone: 69 99348-5751</li>
                            <div className="flex justify-end">
                                <ul className = 'mt-2 flex items-center gap-2'>
                                    <li className = 'bg-white border rounded-xl w-6 h-6 flex items-center justify-center'>
                                        <FaInstagram className = 'text-teal-950'/>
                                    </li>
                                    <li className = 'bg-white border rounded-xl w-6 h-6 flex items-center justify-center'>
                                        <FaGithub className = 'text-teal-950'/>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}