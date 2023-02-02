import { useCallback, useState, useContext, useEffect } from 'react'
import { getMinifig, getFiguresList, setShippingRequest } from '../api/serviceEndpoints'
import { getRandomFigure, trimString } from '../utils/commonMethods'
import robotics from '../images/robotics.svg'
import yoda from '../images/yoda.svg'
import { MyContext } from '../data/context';
import '../styles/MiniFigureDraft.scss'


const MiniFifureDraft = () => {
    const { state } = useContext(MyContext);
    const [miniFigure, setMiniFigure] = useState('')
    const [notAbleToPlaceAnOrder, setNotAbleToPlaceAnOrder] = useState(false);

    const getMiniFig = useCallback(async () => {
        const figuresList = await getFiguresList();
        const randomFigure = getRandomFigure(figuresList.data.results);
        const data = await getMinifig(randomFigure.set_num);
        setMiniFigure(data)
    }, [])

    useEffect(() => {
        setNotAbleToPlaceAnOrder(!state.values || Object.values(state.values).some((element) => !element || state.errors))
    }, [state])

    const placeAnOrder = () => {
        const { city, street, zipCode, firstName, lastName, dob, email, phoneNumber } = state.values
        const body = {
            setNumber: miniFigure.figureInfo.set_num,
            shippingDetails: {
                city,
                street,
                zipCode,
                firstName,
                lastName,
                dob,
            },
            contactDetails: {
                email,
                phoneNumber
            }
        }

        //fake api call with request details - commented to get rid of errors
        // setShippingRequest(body)
    }

    return (
        <div className='miniFigure'>
            {
                miniFigure ? (
                    <div>
                        <h1 className='miniFigure__Title'>YOUR MINIFIG</h1>
                        <div className='miniFigure__Hero'>
                            {
                                miniFigure.figureInfo.set_img_url ? (
                                    <img
                                        className='miniFigure__Hero__Image'
                                        src={miniFigure.figureInfo.set_img_url}
                                        alt="Lego Minifigure Image" />
                                ) : (
                                    <div>
                                        <p>*MHHH*</p>
                                        <p>Image found not</p>
                                        <img
                                            className='miniFigure__Hero__Image'
                                            src={yoda}
                                            alt="Yoda Image" />
                                    </div>

                                )
                            }
                            <p>
                                {miniFigure.figureInfo.name}
                            </p>
                        </div>
                        <div className='miniFigure__Parts'>
                            {
                                miniFigure.partsInfo.results.map(({ part }) => (
                                    <div className='miniFigure__Parts__Element' key={part.id} >
                                        <img
                                            className='miniFigure__Parts__Element__Image'
                                            src={part.part_img_url}
                                            alt="Minifigure part image" />
                                        <div>
                                            <p>{trimString(part.name)}</p>
                                            <p className='miniFigure__Parts__Element__Id'>{part.part_num}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='buttons__Container'>
                            <div onClick={getMiniFig} className='minifigButton'>
                                <p>DRAW AGAIN</p>
                            </div>
                            <span>——— OR ———</span>
                            <button onClick={placeAnOrder} className='minifigButton' disabled={notAbleToPlaceAnOrder}> PLACE AN ORDER</button>
                        </div>
                    </div>
                ) : (
                    <div className='lookingForMinifig'>
                        <img
                            className='lookingForMinifig__Iamge'
                            src={robotics}
                            alt="Robot"
                            width="300px" />
                        <p>Are you looking for minifig?</p>
                        <div className='lookingForMinifig__Button' onClick={getMiniFig}>
                            <p>Click me!</p>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default MiniFifureDraft