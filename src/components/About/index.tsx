import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

export function AboutDesc() {

  return (
    <section className="flex flex-col bg-white dark:bg-gray-900 h-screen">
      <div className='border-2 my-3 rounded-lg'>
        <p className="p-5 text-justify max-w-xl font-normal text-gray-500 dark:text-gray-400">
            👋 Hi, I&apos;m @fairuzikbar<br/><br/>
    I&apos;m interested in Backend and Frontend Development | I&apos;m currently working as Software Engineer | I&apos;m interested on programming, design, and photography</p>
      </div>
    </section>
  );
}