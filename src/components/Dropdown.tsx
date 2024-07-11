import  { useState } from 'react'
import caret from '../assets/icons/caret-down.svg'

interface Props {
  options: string[]
  width?: string
}
const Dropdown = ({options, width }: Props ) => {

   
    const [dropdownToggled, setDropdownToggled] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleDropdownToggle = ()=> {
        setDropdownToggled(!dropdownToggled)

    }
    const handleOptionSelect = (item: string)=> {
        setSelectedOption(item)
        handleDropdownToggle()
    }

  return (
    <div className={`relative ${width ? `w-${width}` : "w-[90px]"}`}>
    <div className={`w-full ${width ? `bg-[#e1e1e1]` : "bg-white"} border border-solid border-[#e1e1e1] rounded-[8px] h-[30px] p-[12px] flex items-center justify-between cursor-pointer`} onClick={handleDropdownToggle}>
        <p className='text-[12px] font-[500] leading-[21px] text-[#505050]'>{selectedOption}</p>
        <img className={`inline-block  transition ease-in duration-200 ${dropdownToggled ? "rotate-180" : "rotate-0"}`} src={caret} alt="arrow"/>
    </div>

    {dropdownToggled && 
    <ul className={`absolute z-10 top-[34px] shadow-lg bg-white rounded-[8px] inline-block py-[8px] ${width ? `w-[45px]` : "w-[90px]"}`}>
        {options.map((option, i)=> <li key={i} className='w-full text-[12px] font-[500] leading-[21px] text-[#505050] cursor-pointer px-[5px] transition ease-in duration-200 hover:bg-[#fdefe7]' onClick={()=> handleOptionSelect(option)}>{option}</li> )}
            
        </ul> }
    </div>
  )
}

export default Dropdown