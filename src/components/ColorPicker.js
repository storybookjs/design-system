import React, { useState } from 'react'
import './colorPicker.css'
import { BlockPicker } from 'react-color'
import Tippy from '@tippyjs/react'

function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState('#ccc')
    return (
        <body>
            <div className='colorPick'>
                <div className='area' style={{ backgroundColor: selectedColor }}>

                </div>

                <Tippy interactive={true} placement={'bottom'} content={
                    <BlockPicker
                        color={selectedColor}
                        onChangeComplete={color => setSelectedColor(color.hex)}
                    />
                }>
                    <button className='ref-button'>Change box color</button>

                </Tippy>

            </div>
        </body>
    )
}

export default ColorPicker

