if (CustIDInput.text && !OrderIDInput.text) {
    CustIDAPI.run(() => {}, () => {});
} else if (CustIDInput.text && OrderIDInput.text) {
    CustIDOrderIDAPI.run(() => {}, () => {});
}