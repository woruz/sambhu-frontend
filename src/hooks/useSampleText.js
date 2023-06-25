import axios from 'axios'
import { useState, useEffect } from 'react'
import { endPoint } from '../endPoints/endPoints'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const useSampleText = () => {
    const [allSampleText, setAllSampleText] = useState()
    const [indivisualSampleText, setIndivisualSampleText] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log({msg: "Hello World"})
        get_all_sample_text()
    }, [])
    
    let save_sample_text = (body) => {
        setIsLoading(true)
        return axios.post(`${endPoint}/sampleText`,body).then((response) => {
            if(response.data.success){
                toast.success(response.data.message)
            }else{
                toast.error(response.data.message)
            }
        }).catch(err => {
            console.log({err})
            toast.error("Something went wrong")
        }).finally(() => {
            setIsLoading(false)
        })
    }

    let get_all_sample_text = () => {
        setIsLoading(true)
        return axios.get(`${endPoint}/sampleText/getAllParagraph`).then((response) => {
            console.log({response})
            if(response.data.success){
                setAllSampleText(response.data.result)
            }else{
                setAllSampleText([])
            }
        }).catch(err => {
            setAllSampleText([])
            toast.error("Something went wrong")
        }).finally(() => {
            setIsLoading(false)
        })
    }

    let get_indivisual_sample_text = (id) => {
        setIsLoading(true)
        return axios.get(`${endPoint}/sampleText/getOneParagraph`,{params: { paragraphId: id}}).then((response) => {
            if(response.data.success){
                setIndivisualSampleText(response.data.result)
            }
        }).catch(err => {
            toast.error("Something went wrong")
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return {
        isLoading,
        allSampleText,
        indivisualSampleText,
        save_sample_text
    }
}

export default useSampleText