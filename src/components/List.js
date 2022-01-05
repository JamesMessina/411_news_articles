import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';


function List(props) {
    const [open, setOpen] = React.useState(false);
    const [newBand, setNewBand] = React.useState({
        band_name:"",
        origin:"",
        yearsActive:"",
        website:"",
        currentMembers:"",
        image:"",
    });
    
    useEffect(() =>{
        console.log("effect called")
        props.fetchBands()
    },[]);

    const handleBandModalOpen = () => {
        setOpen(true);
    };

    const handleBandModalClose = () => {
        setOpen(false);
        setNewBand({
            band_name:"",
            origin:"",
            yearsActive:"",
            website:"",
            currentMembers:"",
            image:"",
        })
    }

    const handleTextInput = (e) => {
        const {name, value} = e.target
        setNewBand({...newBand, [name]: value})
    }

    async function submitBandData(e) {
        e.preventDefault();
        console.log(newBand)
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(newBand)
        }
        console.log(settings)
        try {
            await fetch('http://127.0.0.1:3306/bands', settings)
        }catch(e){
            console.error("problem posting new band", e)
        }

        handleBandModalClose();
        refreshPage()
    }

    const refreshPage = () => {
        window.location.reload(true)
    }
    
    return (
        <div>
            <Button onClick={handleBandModalOpen} color="primary" variant="contained">
                Add a Band
            </Button>
            <Dialog open={open} onClose={handleBandModalClose}>
                <DialogTitle style={{textAlign: "center"}}>Enter New Band Info</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => submitBandData(e)}>
                        <DialogContentText>
                            If you want to add a new alternative band and their 
                            corresponding information, please fill out all fields below 
                            and then click save.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Band Name"
                            type="text"
                            variant="standard"
                            fullWidth
                            id="band_name"
                            name="band_name"
                            onChange={(e) => handleTextInput(e)}
                            value={newBand.band_name}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Origin"
                            type="text"
                            variant="standard"
                            fullWidth
                            id="origin"
                            name="origin"
                            onChange={(e) => handleTextInput(e)}
                            value={newBand.origin}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Years Active"
                            type="text"
                            variant="standard"
                            fullWidth
                            id="yearsActive"
                            name="yearsActive"
                            onChange={(e) => handleTextInput(e)}
                            value={newBand.yearsActive}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Official Website"
                            type="text"
                            variant="standard"
                            fullWidth
                            id="website"
                            name="website"
                            onChange={(e) => handleTextInput(e)}
                            value={newBand.website}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Current Members"
                            type="text"
                            variant="standard"
                            fullWidth
                            id="currentMembers"
                            name="currentMembers"
                            onChange={(e) => handleTextInput(e)}
                            value={newBand.currentMembers}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Image Url or Attachment"
                            type="text"
                            variant="standard"
                            fullWidth
                            id="image"
                            name="image"
                            onChange={(e) => handleTextInput(e)}
                            value={newBand.image}
                        />
                        <DialogActions>
                            <Button onClick={handleBandModalClose} color='primary' variant='contained'>Close</Button>
                            <Button type='submit' color='secondary' variant='contained'>Save</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            {props.bands.map((b, idx) => {
                return (
                    <div key={idx}>
                        <h1>{b.band_name}</h1>
                        <h5>{b.website}</h5>
                        <p>{b.currentMembers}</p>
                        <p>{b.origin}</p>
                        <h6>{b.yearsActive}</h6>
                        <img alt='bandpic' src={b.image}/>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default List