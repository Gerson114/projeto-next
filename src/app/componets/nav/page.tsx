import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiPhoneLight } from "react-icons/pi";
import { BiPhone } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import "./nav.css"
import React from "react";

function nav() {
    return (
        <>
            <div className="disple">
                <header>
                    <div className="pai">
                        <div className="filho" >

                            <div className="flex">
                                <a href=""><IoChatboxEllipsesOutline className="icon" /> CHAT </a>
                            </div>

                            <div className="flex">
                                <a href=""> <FaCheck className="icon" /> TREFAS </a>
                            </div>

                            <div className="flex">
                                <a href=""> <IoVideocamOutline className="icon" />REUNIÃO</a>
                            </div>

                            <div className="flex">
                                <a href=""> <MdOutlineMail className="icon" /> E-MAIL</a>
                            </div>

                            <div className="flex">
                                <a href=""> <AiOutlineInstagram className="icon" /> INSTA</a>
                            </div>

                            <div className="flex">
                                <a href=""> <RiFacebookCircleLine className="icon" /> Facebook</a>
                            </div>

                            <div className="flex">
                                <a href=""> <FaWhatsapp className="icon" />Whatsapp</a>
                            </div>


                        </div>
                    </div>
                </header>





                <section>
                    <div className="chat-pai">
                        <div className="chat-filho" >
                            <h1>Chat</h1>
                            <div className="lab">
                                <div><h3>chat</h3></div>
                                <div><h3>Group</h3></div>
                            </div>
                            <div className="ad" >
                                <a href="">Adicionar</a>
                            </div>

                            <div className="escrol">
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>
                                <p> 81987765</p>


                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="conv-pai" >
                        <div className="conv-filho" >
                            <div className="cams" >
                                 <h1>Name</h1>
                                 <div className="arow">
                                     <IoVideocamOutline className="icon"/>
                                     <PiPhoneLight  className="icon" />
                                    
                                    
                                 </div>
                            </div>



                        </div>

                    </div>
                </section>





                <section>
                    <div className="inf-pai">
                        <div className="inf-filho">
                            <h1>Nome</h1>
                            <div className="number">
                                <p> 81987765</p>
                            </div>






                        </div>

                    </div>
                </section>


            </div>

        </>
    )
}

export default nav