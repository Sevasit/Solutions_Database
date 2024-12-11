//=======================================================
const approvers = [
    { name: "Manager", limit: 5000 },
    { name: "Director", limit: 20000 },
    { name: "CEO", limit: 50000 },
];

const purchaseAmount = 15000;
//=======================================================

function getApproval(approvers, purchaseAmount) {
    //เรียงลำดับ litmit จากน้อยไปมาก
    const sorted = approvers.sort((a, b) => a.limit - b.limit);
    for (const item of sorted) {
        //ถ้า งบซื้อ <= วงเงินที่อนุมัติ จะได้รับการอนุมัติก่อน
        if (purchaseAmount <= item.limit) {
            return {
                approved: item.name,
                approver: true
            };
        }
    }
    // ถ้าไม่มีจะไม่ได้รับการอนุมัติ
    return {
        approved: "No one",
        approver: false
    }
}

console.log(getApproval(approvers, purchaseAmount));