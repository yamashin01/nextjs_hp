import Layout from "../components/Layout";
import Image from "next/image";

export default function Contact () {
    return (
        <Layout title="Contact">
            <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
                <div className="mt-4">
                    <p className="font-bold">Contant info</p>
                </div>
                <div className="flex justify-center mt-4">
                    <Image
                        className="rounded-full"
                        src="/avatar.jpeg"
                        width={60}
                        height={60}
                        alt="Avatar"
                    />
                </div>
                <div className="mt-4">
                    <p className="font-bold">Address</p>
                    <p className="text-xs mt-2 text-gray-600">city A</p>
                    <p className="font-bold mt-3">E-mail</p>
                    <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p>
                    <p className="font-bold mt-3">Phone</p>
                    <p className="text-xs mt-2 text-gray-600">000-123-456</p>
                </div>
                <div className="mt-6 flex justify-around">
                    <a 
                        href="https://twitter.com/ewhh0zAZJ6A8NxW"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg 
                            className="w-6 h-6 mr-3 text-blue-500"
                            stroke="currentColor"
                            fill="currentColor"
                            viewBox="328 355 335 276" 
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="
                                M 630, 425 
                                A 195, 195 0 0 1 331, 600
                                A 142, 142 0 0 0 428, 570
                                A  70,  70 0 0 1 370, 523
                                A  70,  70 0 0 0 401, 521
                                A  70,  70 0 0 1 344, 455
                                A  70,  70 0 0 0 372, 460
                                A  70,  70 0 0 1 354, 370
                                A 195, 195 0 0 0 495, 442
                                A  67,  67 0 0 1 611, 380
                                A 117, 117 0 0 0 654, 363
                                A  65,  65 0 0 1 623, 401
                                A 117, 117 0 0 0 662, 390
                                A  65,  65 0 0 1 630, 425
                                Z"
                                style={{fill:"#3BA9EE"}}/>
                        </svg>
                    </a>
                    <a 
                        href="https://www.facebook.com/syamada01"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <svg 
                            className="w-6 h-6 mr-3 text-blue-500"
                            stroke="currentColor"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" 
                            version="1.0" 
                            x="0px" y="0px" width="50" height="50" 
                            viewBox="0 0 50 50" 
                            style={null}
                        >
                            <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z" />
                        </svg>
                    </a>
                    <a 
                        href="https://github.com/yamashin01"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <svg 
                            className="w-6 h-6 mr-3 text-gray-500"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" height="16" 
                            fill="currentColor" 
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>    
                    </a>
                </div>
            </div>
        </Layout>
    )
  }
