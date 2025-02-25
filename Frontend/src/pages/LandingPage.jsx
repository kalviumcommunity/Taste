import React from 'react'

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <header>
           <nav className="bg-violet-600 text-white flex justify-center items-center py-6 px-6">
               <ul className="flex w-full justify-evenly mx-auto">
                    <li>
                        <a href="#home" className=" font-bold hover:text-yellow-300">Home</a>
                   </li>
                    
                   <li>
                        <a href="#about" className="font-bold hover:text-yellow-300">About</a>
                   </li>

                   <li>
                      <a href="#contact" className="font-bold hover:text-yellow-300">Contact</a>
                   </li>
               </ul>
           </nav>

        {/* Home Section */}
        <section id="home" className="bg-violet-100 text-center py-20">
          <h1 className="text-5xl font-extrabold hover:text-purple-500 transition duration-300 animate-multiColor">TasteTwist</h1>
          <h2 className="text-3xl font-bold text-gray-800 mt-4">Weird Combos, Surprisingly Delicious!</h2>
          <p className="text-lg text-gray-700 mt-3">Discover & Share Unexpected Food Pairings That Actually Work!</p>
          <button className="mt-6 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-900 transition">
            Share your Combos
          </button>
        </section>
      </header>

    <section className="py-20">
      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800">About TasteTwist</h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto px-6 hover:text-purple-500 transition duration-300 animate-multiColor">TasteTwist is a platform where food lovers can share and explore unexpected yet delicious food combinations. Join us to discover new tastes!</p>
      </section>

      {/* Combos Section */}
      <section className=" py-20 bg-violet-50">
        <h2 className="text-4xl font-bold text-center text-gray-800">Popular Unlikely Combos 🍕🍦</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-8 max-w-5xl mx-auto">
          {["fries_icecream", "pickel_peanutbutter", "chocolate_bacon"].map((imageName, index) => (
            <div key={index} className="relative group">
              <img 
                src={`/public/images/${imageName}.jpg`} 
                alt={imageName.replace("_", " + ")} 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-lg font-semibold">{imageName.replace("_", " + ")}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

 </section>

  
      {/* Contact Section */}
      <section id="contact" className="bg-white py-14 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-700 mt-4 max-w-lg mx-auto">Have questions or suggestions? Reach out to us!</p>
        <button className="mt-5 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-800 transition">
          Contact Us
        </button>
      </section>
   

      {/* Footer */}
      <footer className="bg-violet-700 text-white text-center py-5">
        <p>&copy; 2025 TasteTwist. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage

