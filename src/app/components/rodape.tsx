import React from 'react';

const Rodape = () => {
    return (
        <section className="bg-[#000000] flex justify-between items-center text-white p-4">
            <div>
                <ul className="flex list-none space-x-2">
                    <li>
                        <a href="https://github.com/annxsbea/" target="_blank" rel="noopener noreferrer">
                            <img src="/github.png" alt="GitHub" className="w-8" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/annxsbea/" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.png" alt="Instagram" className="w-8" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/annxsbea/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.png" alt="Linked" className="w-8" />
                        </a>
                    </li>
                </ul>
            </div>
          
            <div className="mr-10 mt-2">
                <p>© 2024 by Annxsbea</p>
            </div>
        </section>
    );
}

export default Rodape;
