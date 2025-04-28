export interface AySonucu {
  ay: string;
  kapsananGun: number;
  oran: string;
  taksitTutar: number;
  kkeg: number;
  net: number;
}

export function hesaplaKapsam(startDateStr: string, endDateStr: string, toplamTutar: number): AySonucu[] {
  const turkceAylar = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  let aylar: AySonucu[] = [];
  let toplamGun = 0;

  let current = new Date(startDate.getFullYear(), startDate.getMonth(), 1);

  while (current <= endDate) {
    const yil = current.getFullYear();
    const ay = current.getMonth();
    const ayAdi = turkceAylar[ay];

    const baslangic = new Date(Math.max(startDate.getTime(), new Date(yil, ay, 1).getTime()));
    const bitis = new Date(Math.min(endDate.getTime(), new Date(yil, ay + 1, 0).getTime()));

    const kapsananGun = Math.max(0, Math.ceil((bitis.getTime() - baslangic.getTime()) / (1000 * 60 * 60 * 24)) + 1);

    if (kapsananGun > 0) {
      aylar.push({
        ay: `${yil} - ${ayAdi}`,
        kapsananGun,
        oran: "",
        taksitTutar: 0,
        kkeg: 0,
        net: 0
      });
      toplamGun += kapsananGun;
    }

    current.setMonth(current.getMonth() + 1);
  }

  aylar = aylar.map((item) => {
    const oran = item.kapsananGun / toplamGun;
    const taksit = +(toplamTutar * oran).toFixed(2);
    const kkeg = +(taksit * 0.30).toFixed(2);
    const net = +(taksit * 0.70).toFixed(2);
    return {
      ...item,
      oran: oran.toFixed(4),
      taksitTutar: taksit,
      kkeg,
      net
    };
  });

  return aylar;
}
