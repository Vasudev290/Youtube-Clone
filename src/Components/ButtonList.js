
import Button from './Button'

const buttonListSuggest = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "News", "Cooking", "Arjun", "Tamil", "Podcasts", "Web Development"]

const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto space-x-3 p-2 no-scrollbar'> 
      {
        buttonListSuggest.map((list, index) => (
          <Button key={index} name={list} /> 
        ))
      }
    </div>
  )
}

export default ButtonList