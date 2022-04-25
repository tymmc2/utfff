import { FilterList } from '@mui/icons-material';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import DropdownContext from 'react-bootstrap/esm/DropdownContext';

const FilterButton = ({ updateFilterState, filterState }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <Button className="iconButton"  onClick={handleClick}><FilterList /></Button>
            <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
                <FormGroup>
                    <MenuItem><FormControlLabel control={<Checkbox checked={filterState.utcscalendar} 
                                                                onClick={() => updateFilterState({ ...filterState, utcscalendar: !filterState.utcscalendar })} />} 
                                                                label="UTCS Calendar" /></MenuItem>
                </FormGroup>
            </Menu>
        </div>
    );
};

export default FilterButton;