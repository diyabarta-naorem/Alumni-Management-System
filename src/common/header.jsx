export default function Header(){
    return(
        <div>
          <div className="bg-blue-500 px-44 flex flex-reverse justify-between">
            <div className="flex items-center space-x-4">
              <a className="text-black px-2 py-1 text-sm rounded-2xl cursor-pointer bg-white flex "><h4 className="font-medium" >Email:</h4><p>info@alumni.com</p></a>
              <a className="text-black px-2 py-1 text-sm rounded-2xl cursor-pointer bg-white flex "><h4 className="font-medium" >Hotline  :</h4><p>123456789</p></a>
            </div>
            <div>
              <button className="px-6 py-4 mx-1 bg-blue-500 text-white font-medium hover:bg-blue-400">Signup</button>
              <button className="px-6 py-4 mx-1 bg-green-400 text-white font-medium hover:bg-green-300">Login</button>
            </div>
          </div>
        </div>
    );
}