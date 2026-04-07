import ProductDetail from '@/app/component/ProductDetail'
import { productDataGet } from '@/app/utils/api/apiList';
import { slugify } from '@/app/utils/commonFun';
import { productProps } from '@/app/utils/type';

const page = async ({ params }: { params: { slug: string } }) => {

  // const productData = await productDataGet();
  // console.log(productData.data, "product data");
  // const productDetail: productProps[] = productData.data

  const { slug } =  await params
  const product =   await productDataGet(slug)
  const productDetails = product.data


  if (!product) return <div className='font-semibold text-[40px] '>product does not found</div>
  return (
    <div>
      <ProductDetail product={productDetails} />
    </div>
  )
}

export default page