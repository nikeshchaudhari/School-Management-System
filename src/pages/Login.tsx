
import { useState, type FormEvent} from "react";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const formSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        console.log(email);
        
        

    }
    return (
        <>
            <div className="w-screen bg-[#0d1424] min-h-screen h-full flex items-center relative overflow-hidden">
                <div className="absolute inset-0  w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute w-96 h-96 top-1/3 left-1/3 bg-[#00D6D6]/20 rounded-full blur-3xl "></div>
                    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl  bg-[#0d1424]"></div>
                </div>
                <div className="m-auto  r z-10 text-white ">
                    <h1 className="text-center text-[30px] font-bold mb-5 ">
                         User Login
                    </h1>
                    {/* <p className="mb-5 text-center">
                      
                    </p> */}

                    <div className=" bg-[#02101d]/80 p-1 rounded-3xl shadow-2xl w-[400px]  md:w-[450px] md:h-[360px] ">
                        <div className=" m-10">
                            <form onSubmit={formSubmit}>
                               
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="font-bold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="p-2 my-3 border rounded-lg focus:outline-none  focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="font-bold">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="p-2 my-3 border rounded-lg focus:outline-none  focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                               
                                <div className="relative ">
                                    <span
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
    blur-xl
    opacity-30"
                                    ></span>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 relative w-full py-2 mt-2 rounded text-black text-[18px] font-semibold cursor-pointer shadow-[#00D6D6]"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            <p className="text-center mt-1">
                               Create an account? Register                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
