import axios from "axios";
import { log } from "console";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conpass, setConnpass] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const formSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("fullname", fullname),
      formData.append("role", role),
      formData.append("email", email),
      formData.append("password", password),
      formData.append("conpass", conpass);
  };
  const data ={
    fullname,
    role,
    email,
    password,
    conpass
  };

 const dataPost =async()=>{
  const res = await axios.post("http://localhost:3000/users",data);
  console.log("Data sucessfull insert",res.data);
  

 }
  return (
    <>
      <div className="w-screen bg-[#0d1424] min-h-screen h-full flex items-center relative overflow-hidden">
        <div className="absolute inset-0  w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 top-1/3 left-1/3 bg-[#00D6D6]/20 rounded-full blur-3xl "></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl  bg-[#0d1424]"></div>
        </div>
        <div className="m-auto  r z-10 text-white ">
          <h1 className="text-center text-[30px] font-bold mb-2 ">
            Create an account
          </h1>
          <p className="mb-5 text-center">
            Join us and start your journey today
          </p>

          <div className=" bg-[#02101d]/80 p-1 rounded-3xl shadow-2xl w-[400px]  md:w-[450px] md:h-[500px] ">
            <div className=" m-10">
              <form onSubmit={formSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="full_name" className="font-bold">
                    Full_Name{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Full_Name"
                    id="full_name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="p-2 my-3 border rounded-lg focus:outline-none  focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="font-bold">
                    Role
                  </label>
                  <select
                    name=""
                    id="role"
                    onChange={(e) => setRole(e.target.value)}
                    className="p-2 my-3 w-full border rounded-lg "
                  >
                    <option value="" className="">
                      --Selected Role--
                    </option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                  </select>
                </div>
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
                <div className="flex flex-col">
                  <label htmlFor="con_pass" className="font-bold">
                    Confirm Password{" "}
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    id="con_pass"
                    value={conpass}
                    onChange={(e) => setConnpass(e.target.value)}
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
                    Create account
                  </button>
                </div>
              </form>
              <p className="text-center mt-1">
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
