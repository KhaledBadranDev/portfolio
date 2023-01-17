const sendEmail = (emailInfoObj) => {
    // Reference/Documentation: https://formsubmit.co/ajax-documentation
    return new Promise(async (resolve, reject) => {
        fetch("https://formsubmit.co/ajax/adc8426fa7d0c56378adbc291f7a614e", {
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