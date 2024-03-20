import { Shirt } from 'lucide-react'

const categoriesData = [
  0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
]

export function CategoriesBubbles() {
  return (
    <div>
      <div className='flex'>
        {categoriesData.map((item, index) => (
          <div key={index} className='flex'>
            <div className='flex'>
              <Shirt />
            </div>

            <h3>Vestidos</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
