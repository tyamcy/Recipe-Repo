import '@/styles/globals.css';

import Header from '@/components/organisms/Header';
import { Footer } from '@/components/organisms';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'MyRecipeFridge',
  description: 'Share and discover amazing recipes!'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;