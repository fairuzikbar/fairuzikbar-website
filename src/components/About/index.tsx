import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

export function AboutDesc() {

  return (
    <section className="flex flex-col bg-white dark:bg-gray-900 h-screen">
      <div className='border-2 my-3 rounded-lg'>
        <p className="p-5 text-justify max-w-xl font-normal text-gray-500 dark:text-gray-400">
            👋 Hi, Im @fairuzikbar<br/><br/>
    Im interested in Backend and Frontend Development | Im currently working as Software Engineer | Im interested on programming, design, and photography</p>
      </div>
    </section>
  );
}