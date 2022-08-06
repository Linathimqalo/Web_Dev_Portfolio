import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/Linathimqalo">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/linathi-mqalo-8ab653194/">
            <BsLinkedin />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia