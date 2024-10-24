import { useState } from 'react';
import signupImage from './assets/signup.jpg';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-screen bg-purple-50 flex items-center justify-center">
      <div className="w-full max-w-5xl h-[95vh] flex rounded-3xl shadow-lg overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src={signupImage}
            alt="Authentication illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Auth form */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-10">
          <div className="max-w-sm mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-indigo-900 mb-3">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-violet-500 text-lg">
                {isLogin 
                  ? 'Log in to continue your journey with us.'
                  : 'Sign up to start your journey with us.'}
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-base font-medium text-indigo-900 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="text-base font-medium text-indigo-900 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-base font-medium text-indigo-900 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-indigo-900 block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition bg-gray-50"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-4 rounded-xl transition duration-200 text-lg"
              >
                {isLogin ? 'Log In' : 'Sign Up'}
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                <span className="text-base font-medium text-gray-600">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                <span className="text-base font-medium text-gray-600">GitHub</span>
              </button>
            </div>

            {/* Toggle between login and signup */}
            <div className="text-center">
              <span className="text-gray-600 text-base">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-violet-600 hover:text-violet-700 font-medium text-base"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
