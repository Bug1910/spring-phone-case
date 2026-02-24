import { ShoppingCart, Gift, Truck, Users, Mail, Instagram, MessageCircle, Phone, Star } from 'lucide-react';
import catCase1 from '../assets/16f952bd230674137de0a9336aee1cf9e0c74e1b.png';
import catCase2 from '../assets/91bb27de4e725e9203c95e9fcb64c02cd5f7def5.png';
import catCase3 from '../assets/b9ec9ac7b0a9ecf2ebf03cbee33d54d75beba3c7.png';
// 商品數據
const featuredProduct = {
  id: 1,
  name: '插畫家聯名奶茶小橘喵峽谷強悍MagSafe手機殼',
  price: 1390,
  originalPrice: 1690,
  image: catCase1,
  images: [catCase1, catCase2, catCase3],
  tag: '插畫家聯名',
  colors: ['奶茶色', '天空藍', '櫻花粉']
};

const products = [
  {
    id: 1,
    name: '日系文青插畫手機殼',
    price: 890,
    originalPrice: 1190,
    image: 'https://images.unsplash.com/photo-1759820940967-5c865db93c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaG9uZSUyMGNhc2UlMjBkaXNwbGF5fGVufDF8fHx8MTc3MDgyNTM0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'NEW'
  },
  {
    id: 2,
    name: '簡約純色防摔殼',
    price: 690,
    originalPrice: 990,
    image: 'https://images.unsplash.com/photo-1758218096054-ef3c7b56582c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGhvbmUlMjBjYXNlJTIwd2hpdGV8ZW58MXx8fHwxNzcwODI1MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'HOT'
  },
  {
    id: 3,
    name: '可愛角色聯名款',
    price: 1290,
    originalPrice: 1590,
    image: 'https://images.unsplash.com/photo-1758548108296-39bacfa79a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2hhcmFjdGVyJTIwcGhvbmUlMjBjYXNlfGVufDF8fHx8MTc3MDgyNTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'NEW'
  },
  {
    id: 4,
    name: '透明極簡美學殼',
    price: 590,
    originalPrice: 890,
    image: 'https://images.unsplash.com/photo-1625464735182-5811ad97964d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVudCUyMHBob25lJTIwY2FzZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzA4MjUzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: ''
  },
  {
    id: 5,
    name: '夢幻粉嫩配件組',
    price: 990,
    originalPrice: 1390,
    image: 'https://images.unsplash.com/photo-1680880476741-37d0a36c35b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXdhaWklMjBwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3MDgyNTM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'HOT'
  },
  {
    id: 6,
    name: '潮流撞色系列',
    price: 790,
    originalPrice: 1090,
    image: 'https://images.unsplash.com/photo-1759910546750-d411d105c65d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2UlMjBjb2xsZWN0aW9uJTIwZmxhdCUyMGxheXxlbnwxfHx8fDE3NzA4MjUzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: ''
  },
];

const topProducts = [
  { id: 1, name: '銀杏葉小貓手機殼', price: 1390, rating: 4.9, sales: 2580 },
  { id: 2, name: '霧面質感防摔殼', price: 890, rating: 4.8, sales: 1920 },
  { id: 3, name: '卡通人物聯名款', price: 1290, rating: 4.9, sales: 1650 },
  { id: 4, name: '透明防黃抗摔殼', price: 690, rating: 4.7, sales: 1580 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] relative overflow-hidden">
      {/* Floating Red Confetti Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[5%] left-[10%] text-2xl animate-bounce opacity-60" style={{ animationDuration: '2s', animationDelay: '0s' }}>🎊</div>
        <div className="absolute top-[15%] right-[15%] text-2xl animate-bounce opacity-60" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>🎉</div>
        <div className="absolute top-[25%] left-[80%] text-xl animate-pulse opacity-50" style={{ animationDuration: '3s' }}>🧧</div>
        <div className="absolute top-[40%] left-[5%] text-xl animate-pulse opacity-50" style={{ animationDuration: '2.8s' }}>🏮</div>
        <div className="absolute top-[60%] right-[10%] text-2xl animate-bounce opacity-60" style={{ animationDuration: '3.2s', animationDelay: '1s' }}>💰</div>
        <div className="absolute top-[75%] left-[20%] text-xl animate-pulse opacity-50" style={{ animationDuration: '2.6s' }}>🎊</div>
        <div className="absolute top-[85%] right-[25%] text-2xl animate-bounce opacity-60" style={{ animationDuration: '3s', animationDelay: '0.8s' }}>🪙</div>
      </div>

      {/* Email Container - 600px width */}
      <div className="mx-auto max-w-[600px] bg-white relative z-10 shadow-2xl">
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-[#E85C4C] via-[#FF6B6B] to-[#E85C4C] text-white text-center py-2 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 text-xl animate-pulse">✨</div>
            <div className="absolute top-0 right-0 text-xl animate-pulse">✨</div>
          </div>
          <p className="text-xs relative z-10">🎉 春節出貨公告｜最終客服時間2/14(五)～2/22(日) 🎉</p>
        </div>

        {/* Header */}
        <header className="bg-gradient-to-b from-white to-[#FFF8F8] px-6 py-4 border-b border-[#FFD4D4] relative">
          <div className="absolute top-2 left-2 text-xl animate-bounce" style={{ animationDuration: '3s' }}>🏮</div>
          <div className="absolute top-2 right-2 text-xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>🏮</div>
          
          <div className="flex items-center justify-between mb-3 relative z-10">
            <h1 className="text-2xl font-bold tracking-tight">TOYSELECT</h1>
            <button className="text-sm text-gray-600 hover:text-gray-900">線上客服</button>
          </div>
          <nav className="flex gap-4 text-xs text-gray-600 overflow-x-auto relative z-10">
            <a href="#" className="whitespace-nowrap hover:text-gray-900">iPhone 17</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-900">所有商品</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-900">本檔活動</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-900">新品上市</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-900">聯名限量</a>
            <a href="#" className="whitespace-nowrap hover:text-gray-900">原廠設計</a>
          </nav>
        </header>

        {/* Hero Banner with Red Promotion Tag */}
        <section className="relative bg-gradient-to-br from-[#FFF5F5] via-[#FBF6ED] to-[#FFE8E8] px-6 py-8 overflow-hidden">
          {/* Chinese New Year Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Red Lanterns */}
            <div className="absolute top-0 left-8 text-4xl animate-bounce" style={{ animationDuration: '3s' }}>🏮</div>
            <div className="absolute top-0 right-8 text-4xl animate-bounce" style={{ animationDuration: '3.5s' }}>🏮</div>
            
            {/* Lucky Coins */}
            <div className="absolute top-12 left-16 text-2xl opacity-80">🪙</div>
            <div className="absolute top-16 right-16 text-2xl opacity-80">🪙</div>
            
            {/* Firecrackers */}
            <div className="absolute bottom-20 left-4 text-3xl">🧧</div>
            <div className="absolute bottom-24 right-4 text-3xl">🧧</div>
            
            {/* Decorative clouds */}
            <div className="absolute top-8 left-1/4 text-xl opacity-40">☁️</div>
            <div className="absolute bottom-8 right-1/4 text-xl opacity-40">☁️</div>
            
            {/* Fortune symbols */}
            <div className="absolute top-1/2 left-2 text-sm opacity-60 transform -rotate-12">
              <div className="bg-[#E85C4C] text-[#FFD700] rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-[#FFD700]">福</div>
            </div>
            <div className="absolute top-1/3 right-2 text-sm opacity-60 transform rotate-12">
              <div className="bg-[#E85C4C] text-[#FFD700] rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-[#FFD700]">春</div>
            </div>
          </div>

          <div className="text-center mb-6 relative z-10">
            <div className="inline-block bg-[#E85C4C] text-white px-4 py-1 rounded-full text-sm mb-3 transform -rotate-1 shadow-md">
              🎊 全館最大檔 🎊
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">春新商品週</h2>
            <p className="text-sm text-gray-600">Happy New Year 🧧 恭喜發財</p>
          </div>

          {/* Price Tags */}
          <div className="flex items-center justify-center gap-6 mb-6 relative z-10">
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-md border-2 border-[#E8D4A0]">
                <p className="text-xs text-gray-500">單件</p>
                <p className="text-2xl font-bold text-[#E85C4C]">$1699</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">( 下殺5折起 )</p>
            </div>
            
            <div className="text-center transform scale-110">
              <div className="bg-[#E85C4C] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg relative">
                <div className="absolute -top-1 -right-1 text-lg">✨</div>
                <p className="text-xs">兩件</p>
                <p className="text-2xl font-bold">$2499</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">( 激省32折 )</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-md border-2 border-[#E8D4A0]">
                <p className="text-xs text-gray-500">滿額</p>
                <p className="text-2xl font-bold text-[#E8D4A0]">免運</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">( 購物再升級 )</p>
            </div>
          </div>

          {/* Floating red packets */}
          <div className="absolute bottom-4 left-12 text-2xl opacity-70 animate-pulse">💰</div>
          <div className="absolute bottom-8 right-12 text-2xl opacity-70 animate-pulse">💰</div>
        </section>

        {/* Membership Benefits */}
        <section className="bg-gradient-to-b from-white to-[#FFF5F5] px-6 py-8 border-b border-[#FFD4D4] relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-2xl animate-pulse opacity-70" style={{ animationDuration: '2s' }}>🧧</div>
          <div className="absolute bottom-4 left-4 text-2xl animate-pulse opacity-70" style={{ animationDuration: '2.5s' }}>🎁</div>
          
          <div className="text-center mb-6 relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-1">🎁 會員出好會 🎁</h3>
            <p className="text-xs text-gray-500">加入會員享更多優惠</p>
          </div>

          <div className="grid grid-cols-4 gap-3 relative z-10">
            <div className="bg-[#FBF6ED] rounded-full aspect-square flex flex-col items-center justify-center p-2 border-2 border-[#E8D4A0] hover:scale-105 transition-transform">
              <Gift className="h-6 w-6 text-[#E85C4C] mb-1" />
              <p className="text-xs text-gray-700 text-center">生日<br/>優惠券</p>
            </div>
            <div className="bg-[#FBF6ED] rounded-full aspect-square flex flex-col items-center justify-center p-2 border-2 border-[#E8D4A0] hover:scale-105 transition-transform">
              <Star className="h-6 w-6 text-[#E8D4A0] mb-1" />
              <p className="text-xs text-gray-700 text-center">首購<br/>禮金</p>
            </div>
            <div className="bg-[#FBF6ED] rounded-full aspect-square flex flex-col items-center justify-center p-2 border-2 border-[#E8D4A0] hover:scale-105 transition-transform">
              <Users className="h-6 w-6 text-[#E85C4C] mb-1" />
              <p className="text-xs text-gray-700 text-center">推薦<br/>回饋</p>
            </div>
            <div className="bg-gradient-to-br from-[#E85C4C] to-[#D14B3C] rounded-full aspect-square flex flex-col items-center justify-center p-2 text-white shadow-lg hover:scale-105 transition-transform relative">
              <div className="absolute -top-1 -right-1 text-sm animate-pulse">✨</div>
              <p className="text-lg font-bold">全站</p>
              <p className="text-xs">-100元</p>
            </div>
          </div>
        </section>

        {/* Featured Product - Cat Phone Case */}
        <section className="bg-gradient-to-b from-[#FFF5F5] to-white px-6 py-10 relative overflow-hidden">
          {/* Red decorative elements */}
          <div className="absolute top-8 left-4 text-xl opacity-60 animate-bounce" style={{ animationDuration: '3s' }}>🏮</div>
          <div className="absolute top-12 right-4 text-xl opacity-60 animate-bounce" style={{ animationDuration: '3.5s' }}>🏮</div>
          <div className="absolute bottom-16 left-8 text-lg opacity-50">🧧</div>
          <div className="absolute bottom-20 right-8 text-lg opacity-50">🧧</div>
          
          <div className="text-center mb-6 relative z-10">
            <div className="inline-block bg-gradient-to-r from-[#E85C4C] to-[#FF6B6B] text-white px-4 py-1 rounded-full text-xs mb-2 shadow-md animate-pulse">
              插畫家聯名 🎨
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">本週新品</h3>
            <p className="text-sm text-gray-600">wwiiingg奶茶小橘喵峽谷強悍MagSafe手機殼</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 relative z-10 border-2 border-[#FFE8E8]">
            <div className="relative mb-4">
              {/* Horizontal Scrolling Image Gallery */}
              <div className="overflow-x-auto scrollbar-hide -mx-2">
                <div className="flex gap-3 px-2 snap-x snap-mandatory">
                  {featuredProduct.images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full snap-center">
                      <img
                        src={image}
                        alt={`${featuredProduct.name} - 角度 ${index + 1}`}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Scroll Indicator Dots */}
              <div className="flex justify-center gap-2 mt-3">
                {featuredProduct.images.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300"
                  />
                ))}
              </div>
              <div className="absolute top-3 right-3 bg-[#E85C4C] text-white text-xs px-3 py-1 rounded-full font-bold">
                限量聯名
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-sm font-bold text-gray-900 mb-3">{featuredProduct.name}</h4>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xs text-gray-400 line-through">NT${featuredProduct.originalPrice}</span>
                <span className="text-2xl font-bold text-[#E85C4C]">NT${featuredProduct.price}</span>
              </div>

              <div className="flex gap-2 justify-center mb-4">
                {featuredProduct.colors.map((color, index) => (
                  <div key={index} className="text-xs bg-[#FBF6ED] px-3 py-1 rounded-full border border-[#E8D4A0]">
                    {color}
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#E85C4C] text-white py-3 rounded-lg font-bold hover:bg-[#D14B3C] transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                立即選購
              </button>
            </div>
          </div>

          <div className="bg-[#FBF6ED] rounded-xl p-4 border-2 border-dashed border-[#E8D4A0]">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-[#E85C4C]" />
                <span className="text-gray-700">滿 <strong>NT$1200</strong> 免運</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-[#E8D4A0]" />
                <span className="text-gray-700">滿 <strong>NT$5000</strong> 免運+驚喜禮</span>
              </div>
            </div>
          </div>
        </section>

        {/* Top 30 Ranking */}
        <section className="bg-white px-6 py-10 border-t border-gray-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">🏆 TOP 30 排行榜 🏆</h3>
            <p className="text-sm text-gray-600">熱銷商品搶先看</p>
          </div>

          <div className="space-y-3 mb-6">
            {topProducts.map((product, index) => (
              <div key={product.id} className="flex items-center gap-4 bg-[#FBF6ED] rounded-lg p-4 border border-[#E8D4A0]">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                  index === 0 ? 'bg-[#FFD700] text-white' : 
                  index === 1 ? 'bg-[#C0C0C0] text-white' : 
                  index === 2 ? 'bg-[#CD7F32] text-white' : 
                  'bg-white text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 mb-1">{product.name}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                      <span className="text-xs text-gray-600">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">• 已售 {product.sales}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#E85C4C]">NT${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-white border-2 border-[#E85C4C] text-[#E85C4C] py-3 rounded-lg font-bold hover:bg-[#E85C4C] hover:text-white transition-colors">
            查看完整排行榜 →
          </button>
        </section>

        {/* Product Grid */}
        <section className="bg-gradient-to-b from-white to-[#FFF5F5] px-6 py-10 relative overflow-hidden">
          {/* Floating decorations */}
          <div className="absolute top-8 right-8 text-2xl opacity-60 animate-bounce" style={{ animationDuration: '3s' }}>🎊</div>
          <div className="absolute bottom-12 left-8 text-2xl opacity-60 animate-bounce" style={{ animationDuration: '3.2s' }}>🎉</div>
          <div className="absolute top-1/2 right-4 text-xl opacity-50 animate-pulse">🧧</div>
          
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">精選商品 🛍️</h3>
            <p className="text-sm text-gray-600">Let's See More</p>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border-2 border-gray-100 hover:border-[#FFD4D4] hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover"
                  />
                  {product.badge && (
                    <div className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md animate-pulse ${
                      product.badge === 'NEW' ? 'bg-gradient-to-r from-[#E85C4C] to-[#FF6B6B]' : 'bg-gradient-to-r from-[#E8D4A0] to-[#FFD700]'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 text-lg">
                    {product.badge === 'NEW' ? '✨' : product.badge === 'HOT' ? '🔥' : ''}
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-medium text-gray-900 mb-2 min-h-[32px] line-clamp-2">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 line-through">NT${product.originalPrice}</p>
                      <p className="text-lg font-bold text-[#E85C4C]">NT${product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 bg-gradient-to-r from-[#E85C4C] to-[#FF6B6B] text-white py-4 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg relative z-10">
            查看更多商品 →
          </button>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#E85C4C] via-[#FF6B6B] to-[#E85C4C] px-6 py-12 text-center text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 text-4xl animate-spin" style={{ animationDuration: '20s' }}>🏮</div>
            <div className="absolute top-8 right-8 text-4xl animate-spin" style={{ animationDuration: '25s' }}>🏮</div>
            <div className="absolute bottom-8 left-12 text-3xl animate-bounce" style={{ animationDuration: '2s' }}>🧧</div>
            <div className="absolute bottom-12 right-12 text-3xl animate-bounce" style={{ animationDuration: '2.5s' }}>🧧</div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">立即加入會員 🎊</h3>
            <p className="text-sm mb-6 opacity-90">首次購物即享100元折扣優惠</p>
            
            <button className="bg-white text-[#E85C4C] px-10 py-4 rounded-full font-bold text-lg hover:scale-110 transition-transform shadow-xl mb-4 animate-pulse">
              註冊會員領取優惠 🎁
            </button>

            <div className="flex items-center justify-center gap-8 text-xs opacity-90">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                <span>7天鑑賞期</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                <span>安全購物</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                <span>快速到貨</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#3A3A3A] text-white px-6 py-10">
          <div className="text-center mb-8">
            <h4 className="text-lg font-bold mb-4">聯絡資訊</h4>
            
            <div className="space-y-2 text-sm mb-6">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>客服專線：0800-000-000</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <span>service@toyselect.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>LINE 官方客服</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-3">追蹤我們</p>
              <div className="flex items-center justify-center gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-6 text-xs">
              <p className="text-gray-400 mb-3">
                您收到此郵件是因為您訂閱了 TOYSELECT 電子報
              </p>
              <a href="#" className="text-gray-500 hover:text-white underline mb-4 inline-block">
                取消訂閱
              </a>
              
              <div className="text-gray-500 mt-4">
                <p>© 2026 TOYSELECT. All Rights Reserved.</p>
                <p className="mt-1">台北市信義區 | 統編：12345678</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}