import './Form.css'

const Form = () => {
  return (
    <>
        <div className='form-box'>
            <div className='form-inputs'>
                <input className = "input" type = 'text' placeholder='Name' />
                <input className = "input" type = 'text' placeholder='Email' />
                <input className = "input" type = 'text' placeholder='Phone' />
                <input className = "input input-message" type = 'text' placeholder='Message' />
                <button className='form-btn'>Submit</button>
            </div>
        </div>
    </>
  )
}

export default Form