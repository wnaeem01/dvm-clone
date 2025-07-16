import { features } from '../const'

const Features = () => {
    const featuresContent=features.map((val,index)=>{
        return <div className='p-10 border border-gray-100 bg-[#f1e6f4] text-black space-y-3 w-full' key={index}>
            <div className='flex flex-row align-center justify-items'>
                <span dangerouslySetInnerHTML={{ __html: val.svg }} className='mr-4'/>
                <h1 className='font-bold text-lg'>{val.label}</h1>
            </div>
            <p className='text-sm text-gray-600'>{val.text}</p>
        </div>
    });
  return (
    <div className='flex px-60 py-30 rounded-2xl'>
        {featuresContent}
    </div>
  )
}

export default Features