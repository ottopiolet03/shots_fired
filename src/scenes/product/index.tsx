import { SelectedPage } from '@/shared/types'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Product = ({setSelectedPage}: Props) => {
  return (
    <div id={`${SelectedPage.Product}`}> Product</div>
  )
}

export default Product