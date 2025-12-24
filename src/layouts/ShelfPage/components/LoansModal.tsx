import ShelfCurrentLoans from "../../../modals/ShelfCurrentLoans";

export const LoansModal: React.FC<{ shelfCurrentLoan: ShelfCurrentLoans, mobile: boolean, returnBook: any,
    renewLoan: any }> = (props) => {
        return (
            <div className='modal fade' id={props.mobile ? `mobilemodal${props.shelfCurrentLoan.book.id}` :
                `modal${props.shelfCurrentLoan.book.id}`} data-bs-backdrop='static' data-bs-keyboard='false'
                aria-labelledby='staticBackdropLabel' aria-hidden='true' key={props.shelfCurrentLoan.book.id}>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='staticBackdropLabel'>
                                    Loan Options
                                </h5>
                                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }