# Next.js x GSAP Navigation Bar

Modern, animasyonlu ve mobil uyumlu bir Next.js navigasyon deneyimi sunan mini portföy / landing page örneğidir. Proje, GSAP ile açılır menü animasyonları ve App Router yapısı ile oluşturulmuştur.

## Özellikler

- Next.js 16 App Router kullanımı
- GSAP tabanlı animasyonlu menü açma/kapanma etkisi
- Responsive tasarım (mobil ve masaüstü uyumlu)
- Görsel olarak premium benzeri full-screen overlay menü
- Çoklu sayfa yapısı: Ana Sayfa, Work, About, Contact, Lab
- Tailwind CSS entegrasyonu
- Minimal ve modern tipografi ve düzen

## Teknoloji Yığını

- Next.js 16
- React 19
- GSAP
- @gsap/react
- Tailwind CSS
- TypeScript

## Proje Yapısı

```bash
nextjs-n-gsap-navigation-bar/
├── public/
│   └── hero.jpg
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── lab/
│   │   │   └── page.tsx
│   │   ├── work/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── menu/
│           ├── Menu.tsx
│           └── menu.css
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── next-env.d.ts
└── README.md
```

## Kurulum

Öncelikle proje klasörüne girin:

```bash
cd nextjs-n-gsap-navigation-bar
```

Bağımlılıkları kurun:

```bash
npm install
```

## Çalıştırma

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Tarayıcıda aşağıdaki adresi açın:

```text
http://localhost:3000
```

## Build ve Production

Production build oluşturmak için:

```bash
npm run build
```

Üretilen build'i çalıştırmak için:

```bash
npm run start
```

## Ana Sayfalar

Proje aşağıdaki route yapısını kullanır:

- `/` — Ana sayfa
- `/work` — Çalışmalar sayfası
- `/about` — Hakkında sayfası
- `/contact` — İletişim sayfası
- `/lab` — Lab sayfası

## Navigasyon Özelliği

Menü, `src/components/menu/Menu.tsx` içinde tanımlanır. Bu bileşende:

- Menü açma/kapama butonları
- Overlay animasyonu
- Sol taraf menü linkleri
- Sağ taraf bilgi paneli / sidebar
- GSAP timeline animasyonu yer alır

Animasyonlar `menu.css` ve `useGSAP` ile yönetilir. Menü açıldığında linkler y ekseninde kayar, opaklık artar ve içeriğin görünürlüğü animasyonla tamamlanır.

## Özelleştirme

### Menü linklerini değiştirme

`src/components/menu/Menu.tsx` içindeki `menuLinks` dizisine bakın:

```ts
const menuLinks = [
  { path: "/", label: "Home", num: "01" },
  { path: "/work", label: "Work", num: "02" },
  { path: "/about", label: "About", num: "03" },
  { path: "/contact", label: "Contact", num: "04" },
  { path: "/lab", label: "Lab", num: "05" },
];
```

### Renk ve stil değiştirme

Aşağıdaki dosyalarda stil düzeni yapılabilir:

- `src/components/menu/menu.css` — menü ve overlay stilleri
- `src/app/globals.css` — genel arka plan, tipografi ve sayfa stilleri

### Arka plan görseli değiştirme

`public/hero.jpg` dosyası ana sayfa arka plan görselidir. İsterseniz bu dosyayı farklı bir görsel ile değiştirerek tasarımın genel hissini değiştirebilirsiniz.

## Notlar

- Proje, modern portfolio benzeri bir navigasyon örneği olarak tasarlanmıştır.
- Bazı sidebar bağlantıları örnek içerik olarak bırakılmıştır; gerçek bağlantılar için ilgili sayfalar veya URL'ler güncellenebilir.
- `href="#"` olan bazı linkler henüz gerçek hedefe bağlanmamıştır.

## Sorun Giderme

### 1) Bağımlılıklar kurulmadıysa

```bash
npm install
```

### 2) Port çakışması olursa

```bash
npm run dev -- --port 3001
```

### 3) Build hatası alırsanız

Node.js sürümünüzün uyumlu olduğundan emin olun. Bu proje için Node.js 20+ önerilir.

```bash
node -v
```

### 4) Tarayıcıda sayfa açılmıyorsa

- Geliştirme sunucusunun çalıştığını kontrol edin
- `http://localhost:3000` adresini tekrar açın
- `npm run dev` çıktısında gösterilen farklı bir port varsa onu kullanın

## Vercel ile Yayınlama

Bu proje Next.js olduğu için Vercel üzerinde kolayca yayınlanabilir:

1. GitHub hesabınıza reposu pushleyin
2. Vercel'de yeni proje oluşturun
3. Repo seçin
4. Varsayılan Next.js ayarları ile yayınlayın

Vercel, Next.js uygulamaları için otomatik yapılandırma sağlar.

## Geliştirme İpuçları

- Menü animasyonunu geliştirmek için `Menu.tsx` içindeki `gsap.timeline()` düzenini inceleyebilirsiniz.
- Ekstra sayfalar eklerken `src/app` altında yeni klasörler oluşturabilirsiniz.
- Daha dinamik bir portfolio arayüzü için `work` sayfasında içerik kartları eklenebilir.

## Lisans

Bu proje için özel bir lisans dosyası belirtilmemiştir. Kişisel kullanım, geliştirme ve öğrenme amaçlı kullanılabilir.

---