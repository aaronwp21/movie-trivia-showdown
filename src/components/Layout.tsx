import React from 'react';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <header className="p-4 bg-white">
          <h1 className="font-Righteous text-3xl text-center">
            Movie Trivia Quiz
          </h1>
        </header>
        <main className="bg-primary text-white w-full flex-1 font-Montserrat">
          <div className="p-4 h-full flex flex-col">{children}</div>
        </main>
      </div>
    </>
  );
}

export default Layout;
