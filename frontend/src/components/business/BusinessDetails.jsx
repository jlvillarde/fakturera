import { useEffect, useState } from 'react'

import './BusinessDetails.css'

export default function BusinessDetails() {

    const [details, setDetails] = useState({})

    async function loadBusiness() {
        try {
            const id = 1
            const res = await fetch(`/api/business/${id}`)
            if (!res.ok) throw new Error("Failed to fetch business")
            const data = await res.json()
            setDetails(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadBusiness()
    }, [])


    const handleChange = (event) => {
        const { name, value } = event.target
        setDetails(prev => ({ ...prev, [name]: value }))
    }

    const saveUpdate = async () => {
        try {
            const id = 1
            await fetch(`/api/business/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='form'>
            <span>Your business details. To update them just - change them</span>

            <div className='details'>
                <label htmlFor="name">Name</label>
                <input type="text"
                    name="name" id="name"
                    value={details.name}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Enter name" />
            </div>

            <div className='details'>
                <label htmlFor="address">Address</label>
                <input type="text"
                    name="address"
                    id="address"
                    value={details.address}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Enter address" />
            </div>

            <div className='details'>
                <label htmlFor="address2">Address 2</label>
                <input type="text"
                    name="address2"
                    id="address2"
                    value={details.address2}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Enter address line 2" />
            </div>

            <div className='postcode'>
                <label htmlFor="postcode">Postcode</label>
                <input type="number"
                    name="postCode"
                    id="postcode"
                    value={details.postCode}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Postcode" />

                <label htmlFor="city">City</label>
                <input type="text"
                    name="city"
                    id="city"
                    value={details.city}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="City" />
            </div>

            <div className='sub-details'>
                <label htmlFor="reference">Our reference</label>
                <input type="text"
                    name="reference"
                    id="reference"
                    value={details.reference}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Enter" />
            </div>

            <div className='sub-details'>
                <label htmlFor="phone">Phone</label>
                <input type="text"
                    name="phone"
                    id="phone"
                    value={details.phone}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Enter phone number" />
            </div>

            <div className='sub-details'>
                <label htmlFor="email">Email</label>
                <input type="text"
                    name="email"
                    id="email"
                    value={details.email}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Enter email address" />
            </div>

            <div className='sub-details'>
                <label htmlFor="account">Account</label>
                <input type="text"
                    name="account"
                    id="account"
                    value={details.account}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Enter account number" />
            </div>

            <div className='sub-details'>
                <label htmlFor="org-number">Org. number</label>
                <input type="text"
                    name="orgNumber"
                    id="org-number"
                    value={details.orgNumber}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Enter org number" />
            </div>

            <div className='sub-details'>
                <label htmlFor="homepage">Homepage</label>
                <input type="text"
                    name="homepage"
                    id="homepage"
                    value={details.homepage}
                    onChange={handleChange}
                    onBlur={saveUpdate}
                    placeholder="Will not show on invoice if left empty" />
            </div>

            <span>To change settings - click Settings at the top.</span>
        </div>


    )
}