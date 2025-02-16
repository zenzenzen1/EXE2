import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import httpClient from "../../configurations/HttpClient";


function Demo() {
    const accept = () => {
        alert('You have accepted');
    }

    const reject = () => {
        alert('You have rejected');
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };
    useEffect(() => {
        toast.success("Demo");
        toast.error("Error Demo");
        toast.warn("Warn Demo");
        toast.warning("Warning Demo", {style: {color: "red", cursor: "pointer"}});
        httpClient.get("/payment-info?orderCode=11")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                toast.error(JSON.stringify(err));
            });
    }, []);
    
    return (
        <>
            <ToastContainer draggable/>
            <div>Demo</div>
            <ConfirmDialog />
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
            <div className="card flex flex-wrap gap-2 justify-content-center">
            </div>
        </>
    )
}

export default Demo