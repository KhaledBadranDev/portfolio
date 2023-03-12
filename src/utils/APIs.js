const sendEmail = (emailInfoObj) => {
    // Reference/Documentation: https://formsubmit.co/ajax-documentation
    return new Promise(async (resolve, reject) => {
        fetch("https://formsubmit.co/ajax/9fe657b28eb621f5c145b7b3c1f4c68e", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(emailInfoObj)
        })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));    
    })
}


export {
    sendEmail
}