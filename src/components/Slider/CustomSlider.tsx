import { Slider } from '@mui/material'

export const CustomSlider = () => {
  return (
    <Slider
      defaultValue={30}
      className="text-lime-400"
      componentsProps={{
        thumb: { className: 'rounded-sm hover:bg-yellow-200' }
      }}
    />
  )
}