
const Magazine = ({listmgz}) => {
  return (
    <div className="grid grid-cols-2 gap-[22px] mt-[100px] smartphone:grid-cols-1">
        <img src={listmgz.image} alt="magazine" />
        <article className="font-normal text-2xl text-center mt-[125px] tablet:text-base tablet:mt-8 smartphone:mt-4 smartphone:text-base" >
            {listmgz.article}
        </article>
    </div>
  )
}

export default Magazine