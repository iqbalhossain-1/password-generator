import React, { useState } from 'react'
import ReactSwitch from 'react-switch'

const Passgenerators = () => {

    const [password, setPassword] = useState('default');
    const [passLength, setPassLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChar, setIncludeSpecialChar] = useState(true);

    const generatePasswordFunc = () => {

        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const specialChars = '~!@#$%^&*()_+-=[]{}|';

        let validChars = lowercaseChars;
        if (includeUppercase) {
            validChars += uppercaseChars;
        }
        if (includeNumbers) {
            validChars += numbers;
        }
        if (includeSpecialChar) {
            validChars += specialChars;
        }

        let generatePassword = '';
        for (let i = 0; i < passLength; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            console.log(randomIndex)
            generatePassword += validChars.charAt(randomIndex);
        }
        setPassword(generatePassword);
        console.log('hello');
        console.log(password)

    }




    return (
        <div className='pt-8 text-white font-bold'>

            <div className='flex flex-col items-center'>
                <div className='w-[350px] bg-gradient-to-r shadow-2xl hover:shadow-red-600 from-blue-950 to-green-950 rounded-md p-5'>
                    <div className='flex items-center  justify-between pb-4'>
                        <label>password length:</label>
                        <input
                            value={passLength}
                            onChange={(e) => setPassLength(e.target.value)}
                            className=' border border-white-600 w-10 rounded-md bg-blue-400 text-center' type='number'>

                        </input>
                    </div>
                    <div className='flex items-center justify-between pb-4'>
                        <label>include uppercase</label>
                        <ReactSwitch
                            checked={includeUppercase}
                            onChange={() => setIncludeUppercase(!includeUppercase)}
                            height={20}
                            width={40}
                            handleDiameter={18}

                        ></ReactSwitch>
                    </div>
                    <div className='flex items-center justify-between pb-4'>
                        <label>include numbers</label>
                        <ReactSwitch
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                            height={20}
                            width={40}
                            handleDiameter={18}

                        ></ReactSwitch>
                    </div>
                    <div className='flex items-center justify-between pb-4'>
                        <label>include special characters</label>
                        <ReactSwitch
                            checked={includeSpecialChar}
                            onChange={() => setIncludeSpecialChar(!includeSpecialChar)}
                            height={20}
                            width={40}
                            handleDiameter={18}

                        ></ReactSwitch>
                    </div>

                    <button
                        onClick={generatePasswordFunc}
                        className='bg-blue-400
                         text-white rounded-md py-1 px-3 hover:bg-blue-700'>generate password
                    </button>


                </div>
            </div>
            {password && <p>your generated password: {password}</p>}
        </div>
    )
}

export default Passgenerators