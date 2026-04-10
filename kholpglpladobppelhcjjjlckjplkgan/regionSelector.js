
async function regionSelectorInitiate() {

	chrome.storage.local.set({ regionSelectorEnabled: true });

	function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	let csrfToken = null;
	try {
		var languageCode = (await (await fetch('https://locale.roblox.com/v1/locales/user-localization-locus-supported-locales', {
			credentials: 'include'
		})).json())['generalExperience']['locale']
	} catch {
		var languageCode = 'en_us'
	}

	try {
		var colorMode = (await (await fetch('https://apis.roblox.com/user-settings-api/v1/user-settings', {
			credentials: 'include'
		})).json())['themeType']

	} catch {
		var colorMode = 'Dark'
	}

	if (languageCode == 'en_us') {
		var shareRoRegion_Translated = `Share RoRegion`;
		var copyButton_Translated = `Copy`;
		var giveUsAReview_Translated = `Did this help? Give us a review!`
		var serversIn_Translated = `Servers in`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> of MAX_PLAYERS people max`;
		var regionSelector_Translated = `Region Selector`;
		var joinButton_Translated = `Join`;
		var shareButton_Translated = `Share`;
		var copied_Translated = `Copied!`;
		var closeButton_Translated = `Close`;
		var sortPingLowest_Translated = `Sort: Ping (Lowest)`;
		var sortPlayersHighest_Translated = `Sort: Players (Highest)`;
		var sortPlayersLowest_Translated = `Sort: Players (Lowest)`;
		var refreshServerList_Translated = `Refresh Server List`;
		var loadMoreServers_Translated = `Load More Servers`;
		var comingEarly2026_Translated = `Coming early 2026`;
		var serversText_Translated = `SERVER_COUNT server`;
		var serversText_Plural_Translated = `SERVER_COUNT servers`;
		var unknown_Translated = `Unknown`;
		var unknownLocation_Translated = `Unknown Location`;
		var focusOnRegion_Translated = `Focus on this region`;
		var loading_Translated = `Loading...`;
		var loadingServers_Translated = `Loading servers...`;
		var errorLoadingServers_Translated = `Error loading servers. Please try again.`;
		var errorLoadingMore_Translated = `Error loading more servers`;
		var noPlayersOnline_Translated = `No players online`;
		var error_Translated = `Error!`;
		var rateLimit_Translated = `Rate Limited. Please wait or refresh later.`;
		var introducingRoEarn_Translated = `Introducing RoEarn`;
		var roEarnSubtitle_Translated = `Earn Robux cashback on every single purchase on Roblox!`;
		var roEarnInviteCode_Translated = `Use invite code <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> for 5 Robux balance!`;
		var roEarnDescription_Translated = `Gamepasses, catalog items, bundles—you buy it, you earn on it. Withdraw anytime from your dashboard.`;
		var viewExtension_Translated = `View Extension on Web Store`;
		var skip_Translated = `Skip`;
		var continueToRoRegion_Translated = `Continue to RoRegion`;
	}
	if (languageCode == 'id_id') {
		var shareRoRegion_Translated = `Bagikan RoRegion`;
		var copyButton_Translated = `Salin`;
		var giveUsAReview_Translated = `Apakah ini membantu? Beri kami ulasan!`
		var serversIn_Translated = `Server di`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> dari MAX_PLAYERS orang maksimal`;
		var regionSelector_Translated = `Pemilih Region`;
		var joinButton_Translated = `Bergabung`;
		var shareButton_Translated = `Bagikan`;
		var copied_Translated = `Disalin!`;
		var closeButton_Translated = `Tutup`;
		var sortPingLowest_Translated = `Urutkan: Ping (Terendah)`;
		var sortPlayersHighest_Translated = `Urutkan: Pemain (Tertinggi)`;
		var sortPlayersLowest_Translated = `Urutkan: Pemain (Terendah)`;
		var refreshServerList_Translated = `Muat Ulang Daftar Server`;
		var loadMoreServers_Translated = `Muat Lebih Banyak Server`;
		var comingEarly2026_Translated = `Datang awal 2026`;
		var serversText_Translated = `SERVER_COUNT server`;
		var serversText_Plural_Translated = `SERVER_COUNT server`;
		var unknown_Translated = `Tidak Diketahui`;
		var unknownLocation_Translated = `Lokasi Tidak Diketahui`;
		var focusOnRegion_Translated = `Fokus pada wilayah ini`;
		var loading_Translated = `Memuat...`;
		var loadingServers_Translated = `Memuat server...`;
		var errorLoadingServers_Translated = `Kesalahan memuat server. Silakan coba lagi.`;
		var errorLoadingMore_Translated = `Kesalahan memuat lebih banyak server`;
		var noPlayersOnline_Translated = `Tidak ada pemain online`;
		var error_Translated = `Error!`;
		var rateLimit_Translated = `Terbatas Rate. Harap tunggu atau refresh nanti.`;
		var introducingRoEarn_Translated = `Memperkenalkan RoEarn`;
		var roEarnSubtitle_Translated = `Dapatkan cashback Robux untuk setiap pembelian di Roblox!`;
		var roEarnInviteCode_Translated = `Gunakan kode undangan <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> untuk 5 saldo Robux!`;
		var roEarnDescription_Translated = `Gamepass, item katalog, bundel—kamu beli, kamu dapat. Tarik kapan saja dari dashboard.`;
		var viewExtension_Translated = `Lihat Ekstensi di Web Store`;
		var skip_Translated = `Lewati`;
		var continueToRoRegion_Translated = `Lanjutkan ke RoRegion`;
	}
	if (languageCode == 'de_de') {
		var shareRoRegion_Translated = `RoRegion teilen`;
		var copyButton_Translated = `Kopieren`;
		var giveUsAReview_Translated = `Gib uns eine Bewertung!`
		var serversIn_Translated = `Server in`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> von MAX_PLAYERS Personen maximal`;
		var regionSelector_Translated = `Regionenauswahl`;
		var joinButton_Translated = `Beitreten`;
		var shareButton_Translated = `Teilen`;
		var copied_Translated = `Kopiert!`;
		var closeButton_Translated = `Schließen`;
		var sortPingLowest_Translated = `Sortieren: Ping (Niedrigste)`;
		var sortPlayersHighest_Translated = `Sortieren: Spieler (Höchste)`;
		var sortPlayersLowest_Translated = `Sortieren: Spieler (Niedrigste)`;
		var refreshServerList_Translated = `Serverliste aktualisieren`;
		var loadMoreServers_Translated = `Mehr Server laden`;
		var comingEarly2026_Translated = `Kommt Anfang 2026`;
		var serversText_Translated = `SERVER_COUNT Server`;
		var serversText_Plural_Translated = `SERVER_COUNT Server`;
		var unknown_Translated = `Unbekannt`;
		var unknownLocation_Translated = `Unbekannter Standort`;
		var focusOnRegion_Translated = `Fokus auf diese Region`;
		var loading_Translated = `Laden...`;
		var loadingServers_Translated = `Server werden geladen...`;
		var errorLoadingServers_Translated = `Fehler beim Laden der Server. Bitte versuchen Sie es erneut.`;
		var errorLoadingMore_Translated = `Fehler beim Laden weiterer Server`;
		var noPlayersOnline_Translated = `Keine Spieler online`;
		var error_Translated = `Fehler!`;
		var rateLimit_Translated = `Rate-Limit erreicht. Bitte warten oder später aktualisieren.`;
		var introducingRoEarn_Translated = `Wir präsentieren RoEarn`;
		var roEarnSubtitle_Translated = `Erhalte Robux-Cashback bei jedem Kauf auf Roblox!`;
		var roEarnInviteCode_Translated = `Verwende den Einladungscode <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> für 5 Robux Guthaben!`;
		var roEarnDescription_Translated = `Gamepasses, Katalog-Artikel, Bundles—du kaufst, du verdienst. Jederzeit von deinem Dashboard abheben.`;
		var viewExtension_Translated = `Erweiterung im Web Store ansehen`;
		var skip_Translated = `Überspringen`;
		var continueToRoRegion_Translated = `Weiter zu RoRegion`;
	}
	if (languageCode == 'es_es') {
		var shareRoRegion_Translated = `Compartir RoRegion`;
		var copyButton_Translated = `Copiar`;
		var giveUsAReview_Translated = `¿Te resultó útil? ¡Danos una reseña!`
		var serversIn_Translated = `Servidores en`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> de MAX_PLAYERS personas máximo`;
		var regionSelector_Translated = `Selector de Región`;
		var joinButton_Translated = `Unirse`;
		var shareButton_Translated = `Compartir`;
		var copied_Translated = `¡Copiado!`;
		var closeButton_Translated = `Cerrar`;
		var sortPingLowest_Translated = `Ordenar: Ping (Menor)`;
		var sortPlayersHighest_Translated = `Ordenar: Jugadores (Mayor)`;
		var sortPlayersLowest_Translated = `Ordenar: Jugadores (Menor)`;
		var refreshServerList_Translated = `Actualizar Lista de Servidores`;
		var loadMoreServers_Translated = `Cargar Más Servidores`;
		var comingEarly2026_Translated = `Próximamente a principios de 2026`;
		var serversText_Translated = `SERVER_COUNT servidor`;
		var serversText_Plural_Translated = `SERVER_COUNT servidores`;
		var unknown_Translated = `Desconocido`;
		var unknownLocation_Translated = `Ubicación Desconocida`;
		var focusOnRegion_Translated = `Enfocar en esta región`;
		var loading_Translated = `Cargando...`;
		var loadingServers_Translated = `Cargando servidores...`;
		var errorLoadingServers_Translated = `Error al cargar servidores. Por favor intenta de nuevo.`;
		var errorLoadingMore_Translated = `Error al cargar más servidores`;
		var noPlayersOnline_Translated = `No hay jugadores en línea`;
		var error_Translated = `¡Error!`;
		var rateLimit_Translated = `Límite de velocidad alcanzado. Espera o actualiza más tarde.`;
		var introducingRoEarn_Translated = `Presentamos RoEarn`;
		var roEarnSubtitle_Translated = `¡Gana cashback en Robux en cada compra en Roblox!`;
		var roEarnInviteCode_Translated = `¡Usa el código de invitación <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> para 5 Robux de saldo!`;
		var roEarnDescription_Translated = `Gamepasses, artículos del catálogo, paquetes—compras y ganas. Retira cuando quieras desde tu panel.`;
		var viewExtension_Translated = `Ver Extensión en Web Store`;
		var skip_Translated = `Omitir`;
		var continueToRoRegion_Translated = `Continuar a RoRegion`;
	}
	if (languageCode == 'fr_fr') {
		var shareRoRegion_Translated = `Partager RoRegion`;
		var copyButton_Translated = `Copier`;
		var giveUsAReview_Translated = `Donnez-nous votre avis !`
		var serversIn_Translated = `Serveurs en`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> sur MAX_PLAYERS personnes maximum`;
		var regionSelector_Translated = `Sélecteur de Région`;
		var joinButton_Translated = `Rejoindre`;
		var shareButton_Translated = `Partager`;
		var copied_Translated = `Copié !`;
		var closeButton_Translated = `Fermer`;
		var sortPingLowest_Translated = `Trier : Ping (Plus bas)`;
		var sortPlayersHighest_Translated = `Trier : Joueurs (Plus haut)`;
		var sortPlayersLowest_Translated = `Trier : Joueurs (Plus bas)`;
		var refreshServerList_Translated = `Actualiser la Liste des Serveurs`;
		var loadMoreServers_Translated = `Charger Plus de Serveurs`;
		var comingEarly2026_Translated = `Arrive début 2026`;
		var serversText_Translated = `SERVER_COUNT serveur`;
		var serversText_Plural_Translated = `SERVER_COUNT serveurs`;
		var unknown_Translated = `Inconnu`;
		var unknownLocation_Translated = `Localisation Inconnue`;
		var focusOnRegion_Translated = `Se concentrer sur cette région`;
		var loading_Translated = `Chargement...`;
		var loadingServers_Translated = `Chargement des serveurs...`;
		var errorLoadingServers_Translated = `Erreur lors du chargement des serveurs. Veuillez réessayer.`;
		var errorLoadingMore_Translated = `Erreur lors du chargement de plus de serveurs`;
		var noPlayersOnline_Translated = `Aucun joueur en ligne`;
		var error_Translated = `Erreur !`;
		var rateLimit_Translated = `Limite de débit atteinte. Veuillez attendre ou actualiser plus tard.`;
		var introducingRoEarn_Translated = `Découvrez RoEarn`;
		var roEarnSubtitle_Translated = `Gagnez du cashback en Robux sur chaque achat sur Roblox !`;
		var roEarnInviteCode_Translated = `Utilisez le code d'invitation <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> pour 5 Robux de solde !`;
		var roEarnDescription_Translated = `Gamepasses, articles du catalogue, packs—vous achetez, vous gagnez. Retirez quand vous voulez depuis votre tableau de bord.`;
		var viewExtension_Translated = `Voir l'Extension sur le Web Store`;
		var skip_Translated = `Passer`;
		var continueToRoRegion_Translated = `Continuer vers RoRegion`;
	}
	if (languageCode == 'it_it') {
		var shareRoRegion_Translated = `Condividi RoRegion`;
		var copyButton_Translated = `Copia`;
		var giveUsAReview_Translated = `Ti è stato utile? Lasciaci una recensione!`
		var serversIn_Translated = `Server in`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> di MAX_PLAYERS persone massimo`;
		var regionSelector_Translated = `Selettore Regione`;
		var joinButton_Translated = `Unisciti`;
		var shareButton_Translated = `Condividi`;
		var copied_Translated = `Copiato!`;
		var closeButton_Translated = `Chiudi`;
		var sortPingLowest_Translated = `Ordina: Ping (Più basso)`;
		var sortPlayersHighest_Translated = `Ordina: Giocatori (Più alto)`;
		var sortPlayersLowest_Translated = `Ordina: Giocatori (Più basso)`;
		var refreshServerList_Translated = `Aggiorna Lista Server`;
		var loadMoreServers_Translated = `Carica Altri Server`;
		var comingEarly2026_Translated = `In arrivo inizio 2026`;
		var serversText_Translated = `SERVER_COUNT server`;
		var serversText_Plural_Translated = `SERVER_COUNT server`;
		var unknown_Translated = `Sconosciuto`;
		var unknownLocation_Translated = `Posizione Sconosciuta`;
		var focusOnRegion_Translated = `Concentrati su questa regione`;
		var loading_Translated = `Caricamento...`;
		var loadingServers_Translated = `Caricamento server...`;
		var errorLoadingServers_Translated = `Errore nel caricamento dei server. Riprova.`;
		var errorLoadingMore_Translated = `Errore nel caricamento di altri server`;
		var noPlayersOnline_Translated = `Nessun giocatore online`;
		var error_Translated = `Errore!`;
		var rateLimit_Translated = `Limite di velocità raggiunto. Attendi o aggiorna più tardi.`;
		var introducingRoEarn_Translated = `Ti presentiamo RoEarn`;
		var roEarnSubtitle_Translated = `Guadagna cashback in Robux su ogni acquisto su Roblox!`;
		var roEarnInviteCode_Translated = `Usa il codice invito <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> per 5 Robux di saldo!`;
		var roEarnDescription_Translated = `Gamepass, articoli del catalogo, bundle—compri e guadagni. Preleva quando vuoi dalla tua dashboard.`;
		var viewExtension_Translated = `Vedi Estensione sul Web Store`;
		var skip_Translated = `Salta`;
		var continueToRoRegion_Translated = `Continua a RoRegion`;
	}
	if (languageCode == 'pl_pl') {
		var shareRoRegion_Translated = `Udostępnij RoRegion`;
		var copyButton_Translated = `Kopiuj`;
		var giveUsAReview_Translated = `Czy to pomogło? Oceń nas!`
		var serversIn_Translated = `Serwery w`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> z MAX_PLAYERS osób maksymalnie`;
		var regionSelector_Translated = `Wybór Regionu`;
		var joinButton_Translated = `Dołącz`;
		var shareButton_Translated = `Udostępnij`;
		var copied_Translated = `Skopiowane!`;
		var closeButton_Translated = `Zamknij`;
		var sortPingLowest_Translated = `Sortuj: Ping (Najniższy)`;
		var sortPlayersHighest_Translated = `Sortuj: Gracze (Najwyższy)`;
		var sortPlayersLowest_Translated = `Sortuj: Gracze (Najniższy)`;
		var refreshServerList_Translated = `Odśwież Listę Serwerów`;
		var loadMoreServers_Translated = `Załaduj Więcej Serwerów`;
		var comingEarly2026_Translated = `Już wczesna 2026`;
		var serversText_Translated = `SERVER_COUNT serwer`;
		var serversText_Plural_Translated = `SERVER_COUNT serwery`;
		var unknown_Translated = `Nieznany`;
		var unknownLocation_Translated = `Nieznana Lokalizacja`;
		var focusOnRegion_Translated = `Skup się na tym regionie`;
		var loading_Translated = `Ładowanie...`;
		var loadingServers_Translated = `Ładowanie serwerów...`;
		var errorLoadingServers_Translated = `Błąd ładowania serwerów. Spróbuj ponownie.`;
		var errorLoadingMore_Translated = `Błąd ładowania więcej serwerów`;
		var noPlayersOnline_Translated = `Brak graczy online`;
		var error_Translated = `Błąd!`;
		var rateLimit_Translated = `Limit szybkości osiągnięty. Poczekaj lub odśwież później.`;
		var introducingRoEarn_Translated = `Przedstawiamy RoEarn`;
		var roEarnSubtitle_Translated = `Zdobywaj cashback w Robux za każdy zakup na Roblox!`;
		var roEarnInviteCode_Translated = `Użyj kodu zaproszenia <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> na 5 Robux salda!`;
		var roEarnDescription_Translated = `Przepustki, przedmioty z katalogu, pakiety—kupujesz i zarabiasz. Wypłać kiedy chcesz z panelu.`;
		var viewExtension_Translated = `Zobacz Rozszerzenie w Web Store`;
		var skip_Translated = `Pomiń`;
		var continueToRoRegion_Translated = `Przejdź do RoRegion`;
	}
	if (languageCode == 'pt_br') {
		var shareRoRegion_Translated = `Compartilhar RoRegion`;
		var copyButton_Translated = `Copiar`;
		var giveUsAReview_Translated = `Isso ajudou? Dê-nos uma avaliação!`
		var serversIn_Translated = `Servidores em`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> de MAX_PLAYERS pessoas máximo`;
		var regionSelector_Translated = `Seletor de Região`;
		var joinButton_Translated = `Entrar`;
		var shareButton_Translated = `Compartilhar`;
		var copied_Translated = `Copiado!`;
		var closeButton_Translated = `Fechar`;
		var sortPingLowest_Translated = `Ordenar: Ping (Menor)`;
		var sortPlayersHighest_Translated = `Ordenar: Jogadores (Maior)`;
		var sortPlayersLowest_Translated = `Ordenar: Jogadores (Menor)`;
		var refreshServerList_Translated = `Atualizar Lista de Servidores`;
		var loadMoreServers_Translated = `Carregar Mais Servidores`;
		var comingEarly2026_Translated = `Chegando no início de 2026`;
		var serversText_Translated = `SERVER_COUNT servidor`;
		var serversText_Plural_Translated = `SERVER_COUNT servidores`;
		var unknown_Translated = `Desconhecido`;
		var unknownLocation_Translated = `Localização Desconhecida`;
		var focusOnRegion_Translated = `Focar nesta região`;
		var loading_Translated = `Carregando...`;
		var loadingServers_Translated = `Carregando servidores...`;
		var errorLoadingServers_Translated = `Erro ao carregar servidores. Tente novamente.`;
		var errorLoadingMore_Translated = `Erro ao carregar mais servidores`;
		var noPlayersOnline_Translated = `Nenhum jogador online`;
		var error_Translated = `Erro!`;
		var rateLimit_Translated = `Limite de taxa atingido. Aguarde ou atualize mais tarde.`;
		var introducingRoEarn_Translated = `Apresentamos o RoEarn`;
		var roEarnSubtitle_Translated = `Ganhe cashback em Robux em cada compra no Roblox!`;
		var roEarnInviteCode_Translated = `Use o código de convite <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> para 5 Robux de saldo!`;
		var roEarnDescription_Translated = `Gamepasses, itens do catálogo, pacotes—você compra, você ganha. Saque quando quiser do seu painel.`;
		var viewExtension_Translated = `Ver Extensão na Web Store`;
		var skip_Translated = `Pular`;
		var continueToRoRegion_Translated = `Continuar para RoRegion`;
	}
	if (languageCode == 'vi_vn') {
		var shareRoRegion_Translated = `Chia sẻ RoRegion`;
		var copyButton_Translated = `Sao chép`;
		var giveUsAReview_Translated = `Hãy cho chúng tôi một đánh giá!`
		var serversIn_Translated = `Máy chủ tại`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> trên MAX_PLAYERS người tối đa`;
		var regionSelector_Translated = `Bộ Chọn Vùng`;
		var joinButton_Translated = `Tham gia`;
		var shareButton_Translated = `Chia sẻ`;
		var copied_Translated = `Đã sao chép!`;
		var closeButton_Translated = `Đóng`;
		var sortPingLowest_Translated = `Sắp xếp: Ping (Thấp nhất)`;
		var sortPlayersHighest_Translated = `Sắp xếp: Người chơi (Cao nhất)`;
		var sortPlayersLowest_Translated = `Sắp xếp: Người chơi (Thấp nhất)`;
		var refreshServerList_Translated = `Làm mới Danh sách Máy chủ`;
		var loadMoreServers_Translated = `Tải thêm Máy chủ`;
		var comingEarly2026_Translated = `Sắp có vào đầu năm 2026`;
		var serversText_Translated = `SERVER_COUNT máy chủ`;
		var serversText_Plural_Translated = `SERVER_COUNT máy chủ`;
		var unknown_Translated = `Không xác định`;
		var unknownLocation_Translated = `Vị trí Không xác định`;
		var focusOnRegion_Translated = `Tập trung vào khu vực này`;
		var loading_Translated = `Đang tải...`;
		var loadingServers_Translated = `Đang tải máy chủ...`;
		var errorLoadingServers_Translated = `Lỗi khi tải máy chủ. Vui lòng thử lại.`;
		var errorLoadingMore_Translated = `Lỗi khi tải thêm máy chủ`;
		var noPlayersOnline_Translated = `Không có người chơi trực tuyến`;
		var error_Translated = `Lỗi!`;
		var rateLimit_Translated = `Giới hạn tốc độ. Vui lòng đợi hoặc làm mới sau.`;
		var introducingRoEarn_Translated = `Giới thiệu RoEarn`;
		var roEarnSubtitle_Translated = `Nhận hoàn tiền Robux cho mỗi giao dịch mua trên Roblox!`;
		var roEarnInviteCode_Translated = `Sử dụng mã mời <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> để nhận 5 Robux!`;
		var roEarnDescription_Translated = `Gamepass, vật phẩm, gói—bạn mua, bạn nhận. Rút tiền bất cứ lúc nào từ bảng điều khiển.`;
		var viewExtension_Translated = `Xem Tiện ích trên Web Store`;
		var skip_Translated = `Bỏ qua`;
		var continueToRoRegion_Translated = `Tiếp tục đến RoRegion`;
	}
	if (languageCode == 'tr_tr') {
		var shareRoRegion_Translated = `RoRegion'u Paylaş`;
		var copyButton_Translated = `Kopyala`;
		var giveUsAReview_Translated = `Bu yardımcı oldu mu? Bize bir yorum yap!`
		var serversIn_Translated = `Sunucular`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> / MAX_PLAYERS kişi maksimum`;
		var regionSelector_Translated = `Bölge Seçici`;
		var joinButton_Translated = `Katıl`;
		var shareButton_Translated = `Paylaş`;
		var copied_Translated = `Kopyalandı!`;
		var closeButton_Translated = `Kapat`;
		var sortPingLowest_Translated = `Sırala: Ping (En Düşük)`;
		var sortPlayersHighest_Translated = `Sırala: Oyuncular (En Yüksek)`;
		var sortPlayersLowest_Translated = `Sırala: Oyuncular (En Düşük)`;
		var refreshServerList_Translated = `Sunucu Listesini Yenile`;
		var loadMoreServers_Translated = `Daha Fazla Sunucu Yükle`;
		var comingEarly2026_Translated = `2026 başlarında geliyor`;
		var serversText_Translated = `SERVER_COUNT sunucu`;
		var serversText_Plural_Translated = `SERVER_COUNT sunucu`;
		var unknown_Translated = `Bilinmeyen`;
		var unknownLocation_Translated = `Bilinmeyen Konum`;
		var focusOnRegion_Translated = `Bu bölgeye odaklan`;
		var loading_Translated = `Yükleniyor...`;
		var loadingServers_Translated = `Sunucular yükleniyor...`;
		var errorLoadingServers_Translated = `Sunucular yüklenirken hata. Lütfen tekrar deneyin.`;
		var errorLoadingMore_Translated = `Daha fazla sunucu yüklenirken hata`;
		var noPlayersOnline_Translated = `Çevrimiçi oyuncu yok`;
		var error_Translated = `Hata!`;
		var rateLimit_Translated = `Hız sınırı. Lütfen bekleyin veya daha sonra yenileyin.`;
		var introducingRoEarn_Translated = `RoEarn ile Tanışın`;
		var roEarnSubtitle_Translated = `Roblox'taki her satın alımda Robux cashback kazanın!`;
		var roEarnInviteCode_Translated = `Davet kodunu kullanın <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> 5 Robux bakiye için!`;
		var roEarnDescription_Translated = `Gamepass'ler, katalog öğeleri, paketler—satın al, kazan. Panelden istediğin zaman çek.`;
		var viewExtension_Translated = `Web Store'da Uzantıyı Görüntüle`;
		var skip_Translated = `Atla`;
		var continueToRoRegion_Translated = `RoRegion'a Devam Et`;
	}
	if (languageCode == 'th_th') {
		var shareRoRegion_Translated = `แชร์ RoRegion`;
		var copyButton_Translated = `คัดลอก`;
		var giveUsAReview_Translated = `สิ่งนี้มีประโยชน์หรือไม่ แสดงความคิดเห็นกับเรา!`
		var serversIn_Translated = `เซิร์ฟเวอร์ใน`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> จาก MAX_PLAYERS คน สูงสุด`;
		var regionSelector_Translated = `เครื่องมือเลือกภูมิภาค`;
		var joinButton_Translated = `เข้าร่วม`;
		var shareButton_Translated = `แชร์`;
		var copied_Translated = `คัดลอกแล้ว!`;
		var closeButton_Translated = `ปิด`;
		var sortPingLowest_Translated = `เรียงลำดับ: Ping (ต่ำสุด)`;
		var sortPlayersHighest_Translated = `เรียงลำดับ: ผู้เล่น (สูงสุด)`;
		var sortPlayersLowest_Translated = `เรียงลำดับ: ผู้เล่น (ต่ำสุด)`;
		var refreshServerList_Translated = `รีเฟรชรายการเซิร์ฟเวอร์`;
		var loadMoreServers_Translated = `โหลดเซิร์ฟเวอร์เพิ่มเติม`;
		var comingEarly2026_Translated = `เร็วๆ นี้ต้นปี 2026`;
		var serversText_Translated = `เซิร์ฟเวอร์ SERVER_COUNT เครื่อง`;
		var serversText_Plural_Translated = `เซิร์ฟเวอร์ SERVER_COUNT เครื่อง`;
		var unknown_Translated = `ไม่ทราบ`;
		var unknownLocation_Translated = `ตำแหน่งไม่ทราบ`;
		var focusOnRegion_Translated = `โฟกัสที่ภูมิภาคนี้`;
		var loading_Translated = `กำลังโหลด...`;
		var loadingServers_Translated = `กำลังโหลดเซิร์ฟเวอร์...`;
		var errorLoadingServers_Translated = `ข้อผิดพลาดในการโหลดเซิร์ฟเวอร์ กรุณาลองใหม่อีกครั้ง`;
		var errorLoadingMore_Translated = `ข้อผิดพลาดในการโหลดเซิร์ฟเวอร์เพิ่มเติม`;
		var noPlayersOnline_Translated = `ไม่มีผู้เล่นออนไลน์`;
		var error_Translated = `ข้อผิดพลาด!`;
		var rateLimit_Translated = `ถูกจำกัดอัตรา กรุณารอหรือรีเฟรชภายหลัง`;
		var introducingRoEarn_Translated = `ขอแนะนำ RoEarn`;
		var roEarnSubtitle_Translated = `รับเงินคืน Robux จากทุกการซื้อบน Roblox!`;
		var roEarnInviteCode_Translated = `ใช้รหัสเชิญ <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> รับ 5 Robux!`;
		var roEarnDescription_Translated = `Gamepass, ไอเทมแคตตาล็อก, บันเดิล—ซื้อแล้วได้รับ ถอนได้ทุกเมื่อจากแดชบอร์ด`;
		var viewExtension_Translated = `ดูส่วนขยายใน Web Store`;
		var skip_Translated = `ข้าม`;
		var continueToRoRegion_Translated = `ดำเนินการต่อไปยัง RoRegion`;
	}
	if (languageCode == 'zh_cn') {
		var shareRoRegion_Translated = `分享 RoRegion`;
		var copyButton_Translated = `复制`;
		var giveUsAReview_Translated = `这有帮助吗？给我们评论！`
		var serversIn_Translated = `服务器位于`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> / MAX_PLAYERS 人最多`;
		var regionSelector_Translated = `区域选择器`;
		var joinButton_Translated = `加入`;
		var shareButton_Translated = `分享`;
		var copied_Translated = `已复制！`;
		var closeButton_Translated = `关闭`;
		var sortPingLowest_Translated = `排序：延迟（最低）`;
		var sortPlayersHighest_Translated = `排序：玩家（最高）`;
		var sortPlayersLowest_Translated = `排序：玩家（最低）`;
		var refreshServerList_Translated = `刷新服务器列表`;
		var loadMoreServers_Translated = `加载更多服务器`;
		var comingEarly2026_Translated = `即将于2026年初推出`;
		var serversText_Translated = `SERVER_COUNT 台服务器`;
		var serversText_Plural_Translated = `SERVER_COUNT 台服务器`;
		var unknown_Translated = `未知`;
		var unknownLocation_Translated = `未知位置`;
		var focusOnRegion_Translated = `专注于此区域`;
		var loading_Translated = `加载中...`;
		var loadingServers_Translated = `正在加载服务器...`;
		var errorLoadingServers_Translated = `加载服务器时出错。请重试。`;
		var errorLoadingMore_Translated = `加载更多服务器时出错`;
		var noPlayersOnline_Translated = `没有在线玩家`;
		var error_Translated = `错误！`;
		var rateLimit_Translated = `速率限制。请稍等或稍后刷新。`;
		var introducingRoEarn_Translated = `介绍 RoEarn`;
		var roEarnSubtitle_Translated = `在Roblox上的每次购买都能获得Robux返现！`;
		var roEarnInviteCode_Translated = `使用邀请码 <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> 获得5 Robux余额！`;
		var roEarnDescription_Translated = `游戏通行证、目录物品、捆绑包——买就赚。随时从仪表板提现。`;
		var viewExtension_Translated = `在Web Store查看扩展`;
		var skip_Translated = `跳过`;
		var continueToRoRegion_Translated = `继续前往 RoRegion`;
	}
	if (languageCode == 'zh_tw') {
		var shareRoRegion_Translated = `分享 RoRegion`;
		var copyButton_Translated = `複製`;
		var giveUsAReview_Translated = `這樣有幫助嗎？給我們一個評論！`
		var serversIn_Translated = `伺服器位於`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> / MAX_PLAYERS 人最多`;
		var regionSelector_Translated = `區域選擇器`;
		var joinButton_Translated = `加入`;
		var shareButton_Translated = `分享`;
		var copied_Translated = `已複製！`;
		var closeButton_Translated = `關閉`;
		var sortPingLowest_Translated = `排序：延遲（最低）`;
		var sortPlayersHighest_Translated = `排序：玩家（最高）`;
		var sortPlayersLowest_Translated = `排序：玩家（最低）`;
		var refreshServerList_Translated = `重新整理伺服器列表`;
		var loadMoreServers_Translated = `載入更多伺服器`;
		var comingEarly2026_Translated = `即將於2026年初推出`;
		var serversText_Translated = `SERVER_COUNT 台伺服器`;
		var serversText_Plural_Translated = `SERVER_COUNT 台伺服器`;
		var unknown_Translated = `未知`;
		var unknownLocation_Translated = `未知位置`;
		var focusOnRegion_Translated = `專注於此區域`;
		var loading_Translated = `載入中...`;
		var loadingServers_Translated = `正在載入伺服器...`;
		var errorLoadingServers_Translated = `載入伺服器時出錯。請重試。`;
		var errorLoadingMore_Translated = `載入更多伺服器時出錯`;
		var noPlayersOnline_Translated = `沒有線上玩家`;
		var error_Translated = `錯誤！`;
		var rateLimit_Translated = `速率限制。請稍等或稍後重新整理。`;
		var introducingRoEarn_Translated = `介紹 RoEarn`;
		var roEarnSubtitle_Translated = `在Roblox上的每次購買都能獲得Robux返現！`;
		var roEarnInviteCode_Translated = `使用邀請碼 <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> 獲得5 Robux餘額！`;
		var roEarnDescription_Translated = `遊戲通行證、目錄物品、捆綁包——買就賺。隨時從儀表板提現。`;
		var viewExtension_Translated = `在Web Store查看擴充功能`;
		var skip_Translated = `跳過`;
		var continueToRoRegion_Translated = `繼續前往 RoRegion`;
	}
	if (languageCode == 'ja_jp') {
		var shareRoRegion_Translated = `RoRegion を共有`;
		var copyButton_Translated = `コピー`;
		var giveUsAReview_Translated = `役に立ちましたか? レビューを投稿してください!`
		var serversIn_Translated = `サーバーの場所`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> / MAX_PLAYERS 人最大`;
		var regionSelector_Translated = `地域セレクター`;
		var joinButton_Translated = `参加`;
		var shareButton_Translated = `共有`;
		var copied_Translated = `コピーしました！`;
		var closeButton_Translated = `閉じる`;
		var sortPingLowest_Translated = `ソート：Ping（最低）`;
		var sortPlayersHighest_Translated = `ソート：プレイヤー（最高）`;
		var sortPlayersLowest_Translated = `ソート：プレイヤー（最低）`;
		var refreshServerList_Translated = `サーバーリストを更新`;
		var loadMoreServers_Translated = `もっとサーバーをロード`;
		var comingEarly2026_Translated = `2026年初頭に登場`;
		var serversText_Translated = `SERVER_COUNT サーバー`;
		var serversText_Plural_Translated = `SERVER_COUNT サーバー`;
		var unknown_Translated = `不明`;
		var unknownLocation_Translated = `不明な場所`;
		var focusOnRegion_Translated = `この地域にフォーカス`;
		var loading_Translated = `読み込み中...`;
		var loadingServers_Translated = `サーバーを読み込み中...`;
		var errorLoadingServers_Translated = `サーバーの読み込みエラー。もう一度お試しください。`;
		var errorLoadingMore_Translated = `より多くのサーバーの読み込みエラー`;
		var noPlayersOnline_Translated = `オンラインプレイヤーなし`;
		var error_Translated = `エラー！`;
		var rateLimit_Translated = `レート制限。お待ちいただくか、後で更新してください。`;
		var introducingRoEarn_Translated = `RoEarnのご紹介`;
		var roEarnSubtitle_Translated = `Robloxでの全ての購入でRobuxキャッシュバックを獲得！`;
		var roEarnInviteCode_Translated = `招待コード <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> を使って5 Robux残高をゲット！`;
		var roEarnDescription_Translated = `ゲームパス、カタログアイテム、バンドル—買えば稼げる。ダッシュボードからいつでも引き出し可能。`;
		var viewExtension_Translated = `Web Storeで拡張機能を見る`;
		var skip_Translated = `スキップ`;
		var continueToRoRegion_Translated = `RoRegionに進む`;
	}
	if (languageCode == 'ko_kr') {
		var shareRoRegion_Translated = `RoRegion 공유`;
		var copyButton_Translated = `복사`;
		var giveUsAReview_Translated = `도움이 되었나요? 리뷰를 남겨주세요!`
		var serversIn_Translated = `서버 위치`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> / MAX_PLAYERS 명 최대`;
		var regionSelector_Translated = `지역 선택기`;
		var joinButton_Translated = `참여`;
		var shareButton_Translated = `공유`;
		var copied_Translated = `복사됨!`;
		var closeButton_Translated = `닫기`;
		var sortPingLowest_Translated = `정렬: 핑 (최저)`;
		var sortPlayersHighest_Translated = `정렬: 플레이어 (최고)`;
		var sortPlayersLowest_Translated = `정렬: 플레이어 (최저)`;
		var refreshServerList_Translated = `서버 목록 새로고침`;
		var loadMoreServers_Translated = `더 많은 서버 로드`;
		var comingEarly2026_Translated = `2026년 초 출시 예정`;
		var serversText_Translated = `SERVER_COUNT 서버`;
		var serversText_Plural_Translated = `SERVER_COUNT 서버`;
		var unknown_Translated = `알 수 없음`;
		var unknownLocation_Translated = `알 수 없는 위치`;
		var focusOnRegion_Translated = `이 지역에 집중`;
		var loading_Translated = `로딩 중...`;
		var loadingServers_Translated = `서버 로딩 중...`;
		var errorLoadingServers_Translated = `서버 로딩 오류. 다시 시도해주세요.`;
		var errorLoadingMore_Translated = `더 많은 서버 로딩 오류`;
		var noPlayersOnline_Translated = `온라인 플레이어 없음`;
		var error_Translated = `오류!`;
		var rateLimit_Translated = `속도 제한. 잠시 기다리거나 나중에 새로고침하세요.`;
		var introducingRoEarn_Translated = `RoEarn 소개`;
		var roEarnSubtitle_Translated = `Roblox에서 모든 구매에 Robux 캐시백을 받으세요!`;
		var roEarnInviteCode_Translated = `초대 코드 <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong>를 사용하여 5 Robux 잔액을 받으세요!`;
		var roEarnDescription_Translated = `게임패스, 카탈로그 아이템, 번들—구매하면 적립됩니다. 대시보드에서 언제든지 인출하세요.`;
		var viewExtension_Translated = `Web Store에서 확장 프로그램 보기`;
		var skip_Translated = `건너뛰기`;
		var continueToRoRegion_Translated = `RoRegion으로 계속`;
	}
	if (languageCode == 'ar_001') {
		var shareRoRegion_Translated = `شارك RoRegion`;
		var copyButton_Translated = `نسخ`;
		var giveUsAReview_Translated = `هل كان هذا مفيدًا؟ شاركنا رأيك!`
		var serversIn_Translated = `خوادم في`;
		var playerCount_Translated = `<span style="">PLAYING_COUNT</span> من MAX_PLAYERS شخص كحد أقصى`;
		var regionSelector_Translated = `محدد المنطقة`;
		var joinButton_Translated = `انضم`;
		var shareButton_Translated = `شارك`;
		var copied_Translated = `تم النسخ!`;
		var closeButton_Translated = `إغلاق`;
		var sortPingLowest_Translated = `ترتيب: البنج (الأقل)`;
		var sortPlayersHighest_Translated = `ترتيب: اللاعبين (الأعلى)`;
		var sortPlayersLowest_Translated = `ترتيب: اللاعبين (الأقل)`;
		var refreshServerList_Translated = `تحديث قائمة الخوادم`;
		var loadMoreServers_Translated = `تحميل المزيد من الخوادم`;
		var comingEarly2026_Translated = `قادم في أوائل 2026`;
		var serversText_Translated = `SERVER_COUNT خادم`;
		var serversText_Plural_Translated = `SERVER_COUNT خادم`;
		var unknown_Translated = `غير معروف`;
		var unknownLocation_Translated = `موقع غير معروف`;
		var focusOnRegion_Translated = `التركيز على هذه المنطقة`;
		var loading_Translated = `جاري التحميل...`;
		var loadingServers_Translated = `جاري تحميل الخوادم...`;
		var errorLoadingServers_Translated = `خطأ في تحميل الخوادم. يرجى المحاولة مرة أخرى.`;
		var errorLoadingMore_Translated = `خطأ في تحميل المزيد من الخوادم`;
		var noPlayersOnline_Translated = `لا يوجد لاعبون متصلون`;
		var error_Translated = `خطأ!`;
		var rateLimit_Translated = `محدود المعدل. يرجى الانتظار أو التحديث لاحقاً.`;
		var introducingRoEarn_Translated = `نقدم لكم RoEarn`;
		var roEarnSubtitle_Translated = `احصل على استرداد نقدي بالـ Robux على كل عملية شراء في Roblox!`;
		var roEarnInviteCode_Translated = `استخدم رمز الدعوة <strong style="color: #ff6ec7; font-weight: 600;">BDWHBCVA</strong> للحصول على 5 Robux رصيد!`;
		var roEarnDescription_Translated = `تذاكر الألعاب، عناصر الكتالوج، الحزم—تشتري وتكسب. اسحب في أي وقت من لوحة التحكم.`;
		var viewExtension_Translated = `عرض الإضافة في متجر الويب`;
		var skip_Translated = `تخطي`;
		var continueToRoRegion_Translated = `المتابعة إلى RoRegion`;
	}

	chrome.storage.local.get({
		regionSelectorEnabled: false,
		showServerListOverlay: true,
		regionSimpleUi: false
	}, function(settings) {
		if (settings.regionSelectorEnabled && !settings.regionSimpleUi) {
			if (window.location.pathname.includes('/games/')) {
				const url = window.location.href;
				let placeId = null;
				const regex = /https:\/\/www\.roblox\.com\/(?:[a-z]{2}\/)?games\/(\d+)/;
				const match = url.match(regex);
				if (match && match[1]) {
					placeId = match[1]
				}
				let defaultRegions = ["SG", "DE", "FR", "JP", "BR", "NL", "US-CA", "US-VA", "US-IL", "US-TX", "US-FL", "US-NY", "US-WA", "AU", "GB", "IN"];
				const regionCoordinates = {
					"SG": {
						latitude: 1.3521,
						longitude: 103.8198,
						city: "Singapore",
						state: null,
						country: "Singapore"
					},
					"DE": {
						latitude: 50.1109,
						longitude: 8.6821,
						city: "Frankfurt",
						state: null,
						country: "Germany"
					},
					"FR": {
						latitude: 48.8566,
						longitude: 2.3522,
						city: "Paris",
						state: null,
						country: "France"
					},
					"JP": {
						latitude: 35.6895,
						longitude: 139.6917,
						city: "Tokyo",
						state: null,
						country: "Japan"
					},
					"BR": {
						latitude: -14.2350,
						longitude: -51.9253,
						city: comingEarly2026_Translated,
						state: null,
						country: "Brazil"
					},
					"NL": {
						latitude: 52.3676,
						longitude: 4.9041,
						city: "Amsterdam",
						state: null,
						country: "Netherlands"
					},
					"US-CA": {
						latitude: 34.0522,
						longitude: -118.2437,
						city: "LA",
						state: "California",
						country: "United States"
					},
					"US-VA": {
						latitude: 38.9577,
						longitude: -77.1445,
						city: "Ashburn",
						state: "Virginia",
						country: "United States"
					},
					"US-IL": {
						latitude: 41.8781,
						longitude: -87.6298,
						city: "Chicago",
						state: "Illinois",
						country: "United States"
					},
					"US-TX": {
						latitude: 32.7767,
						longitude: -96.7970,
						city: "Dallas",
						state: "Texas",
						country: "United States"
					},
					"US-FL": {
						latitude: 25.7617,
						longitude: -80.1918,
						city: "Miami",
						state: "Florida",
						country: "United States"
					},
					"US-NY": {
						latitude: 40.7128,
						longitude: -74.0060,
						city: "NYC",
						state: "New York",
						country: "United States"
					},
					"US-WA": {
						latitude: 47.6062,
						longitude: -122.3321,
						city: "Seattle",
						state: "Washington",
						country: "United States"
					},
					"AU": {
						latitude: -33.8688,
						longitude: 151.2093,
						city: "Sydney",
						state: null,
						country: "Australia"
					},
					"GB": {
						latitude: 51.5074,
						longitude: -0.1278,
						city: "London",
						state: null,
						country: "United Kingdom"
					},
					"IN": {
						latitude: 19.0760,
						longitude: 72.8777,
						city: "Mumbai",
						state: null,
						country: "India"
					}
				};
				let regionReplacedMap = {};
				let regionServerCounting = {};
				let allRobloxServers = [];
				let robloxServerPlaces = {};
				let robloxProfileUserLocation = null;
				let checkForRefreshingCount = false;
				let rateLimited = false;
				let nextPageCursor = null;
				let regionSpecificServers = {};
				let isFetchingServersForRegion = {};
				let regionSelectorShowServerListOverlay = true;
				let regionSelectorEnabled = true;
				let regionButtonAdded = false;
				let serverListState = {
					visibleServerCount: 0,
					fetchedServerIds: new Set(),
					renderedServerIds: new Set(),
					servers: [],
					renderedServersData: new Map(),
					loading: false,
					currentSort: 'ping_lowest'
				};
				let serverIpMap = null;
				let csrfToken = null;
				let activeRequests = 0;
				let currentTheme = null;
				let thumbnailCache = new Map();
				let serverEntryCache = new Map();
				const BATCH_SIZE = 8;
				const THUMBNAIL_BATCH_SIZE = 50;
				async function detectThemeAPI() {
					if (currentTheme) return currentTheme;
					try {
						const response = await fetch('https://apis.roblox.com/user-settings-api/v1/user-settings', {
							credentials: 'include'
						});
						if (!response.ok) {
							currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
						} else {
							const data = await response.json();
							if (data && data.themeType) {
								currentTheme = data.themeType.toLowerCase();
							} else {
								currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
							}
						}
					} catch (error) {
						currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
					}
					return currentTheme;
				}
				async function applyTheme() {
					await detectThemeAPI();
				}
				async function updateRegionSelectorState() {
					const settings = await new Promise((resolve) => {
						chrome.storage.local.get({
							regionSelectorEnabled: true,
							showServerListOverlay: true,
						}, (result) => {
							resolve(result);
						});
					});
					regionSelectorEnabled = settings.regionSelectorEnabled;
					regionSelectorShowServerListOverlay = settings.showServerListOverlay;
				}

				function handleRateLimitedState(limited) {
					rateLimited = limited;
					const refreshButton = document.querySelector(`#regionDropdown button[title="${refreshServerList_Translated}"]`);
					if (refreshButton) {
						refreshButton.disabled = checkForRefreshingCount || limited;
						refreshButton.style.cursor = (checkForRefreshingCount || limited) ? 'not-allowed' : 'pointer';
						const isDarkMode = currentTheme === 'dark';
						refreshButton.style.color = (checkForRefreshingCount || limited) ? (isDarkMode ? '#888' : '#999') : (isDarkMode ? '#ccc' : '#555');
					}
				}
				async function getServerInfo(placeId, robloxCookie, regions, initialCall = true, cursor = null, specificRegion = null) {
					const MAX_RETRIES = 5;
					const INITIAL_BACKOFF_MS = 2000;
					const BACKOFF_FACTOR = 2;
					if (!regionSelectorEnabled) return;
					if (checkForRefreshingCount && initialCall) {
						return;
					}
					let success = false;
					let attempt = 0;
					let currentBackoff = INITIAL_BACKOFF_MS;
					if (initialCall) {
						checkForRefreshingCount = true;
						rateLimited = false;
						handleRateLimitedState(false);
					}
					try {
						if (initialCall) {
							if (!specificRegion) {
								allRobloxServers = [];
								regionServerCounting = {};
								robloxServerPlaces = {};
								regionSpecificServers = {};
								nextPageCursor = null;
							} else {
								regionSpecificServers[specificRegion] = [];
								regionServerCounting[specificRegion] = 0;
							}
						}
						await updateDetailsServers();
						while (attempt <= MAX_RETRIES) {
							attempt++;
							let response = null;
							try {
								let url = `https://games.roblox.com/v1/games/${placeId}/servers/Public?excludeFullGames=true&limit=100`;
								if (cursor) {
									url += `&cursor=${cursor}`;
								}
								response = await fetch(url, {
									headers: {
										'Accept': 'application/json'
									},
									credentials: 'include'
								});
								if (response.ok) {
									rateLimited = false;
									handleRateLimitedState(false);
									const servers = await response.json();
									const currentPageCursor = servers.nextPageCursor;
									if (!servers.data || servers.data.length === 0) {
										if (initialCall && !specificRegion) {
											allRobloxServers = [];
										}
									} else {
										const currentBatchServers = servers.data;
										currentBatchServers.forEach(server => {
											server._uniqueId = Date.now() + "_" + Math.random().toString(36).substr(2, 9);
										});
										if (initialCall && !specificRegion) {
											allRobloxServers = currentBatchServers;
										} else {
											const existingIds = new Set(allRobloxServers.map(s => s.id));
											const newServers = currentBatchServers.filter(s => !existingIds.has(s.id));
											allRobloxServers = [...allRobloxServers, ...newServers];
										}
										const serverPromises = currentBatchServers.map(server => handleServer(server, placeId, robloxCookie, regions, specificRegion).catch(err => {
											return null;
										}));
										await Promise.all(serverPromises);
									}
									success = true;
									if (currentPageCursor) {
										await new Promise(resolve => setTimeout(resolve, 100));
										await getServerInfo(placeId, robloxCookie, regions, false, currentPageCursor, specificRegion);
									}
									break;
								} else if (response.status === 429) {
									rateLimited = true;
									handleRateLimitedState(true);
									if (attempt > MAX_RETRIES) {
										break;
									} else {
										await new Promise(resolve => setTimeout(resolve, currentBackoff));
										currentBackoff *= BACKOFF_FACTOR;
									}
								} else if (response.status === 401 || response.status === 403) {
									success = false;
									break;
								} else {
									const errorDetails = await response.text().catch(() => "Could not read error body");
									success = false;
									break;
								}
							} catch (networkError) {
								success = false;
								break;
							}
						}
						if (specificRegion) {
							updateRegionSpecificCache(specificRegion);
						} else {
							Object.keys(regionServerCounting).forEach(region => {
								updateRegionSpecificCache(region);
							});
						}
					} catch (outerError) {
						success = false;
					} finally {
						if (initialCall || !success) {
							checkForRefreshingCount = false;
							handleRateLimitedState(rateLimited);
							await updateDetailsServers();
						}
					}
				}

				function updateRegionSpecificCache(region) {
					if (!region) return;
					regionSpecificServers[region] = allRobloxServers.filter(server => robloxServerPlaces[server.id]?.c === region);
				}
				(async () => {
					try {
						let serverListJsonText;
						if (typeof GM_getResourceText === 'function') {
							serverListJsonText = GM_getResourceText("serverListJSON");
						} else if (chrome && chrome.runtime && chrome.runtime.getURL) {
							const url = chrome.runtime.getURL('json/regionList.json');
							const response = await fetch(url);
							if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
							serverListJsonText = await response.text();
						} else {
							throw new Error("Cannot determine environment (Tampermonkey or Chrome Extension) to load resource.");
						}
						if (!serverListJsonText) {
							throw new Error("Failed to load serverListJSON resource text.");
						}
						serverIpMap = JSON.parse(serverListJsonText);
					} catch (error) {
						serverIpMap = {};
					}
				})();
				async function getCsrfToken() {
					if (csrfToken) {
						return csrfToken;
					}
					try {
						const response = await fetch('https://auth.roblox.com/v2/logout', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							credentials: 'include'
						});
						const token = response.headers.get('x-csrf-token');
						if (token) {
							csrfToken = token;
							return token;
						} else {
							const metaToken = document.querySelector('meta[name="csrf-token"]');
							if (metaToken) {
								const metaContent = metaToken.getAttribute('content');
								csrfToken = metaContent;
								return csrfToken;
							}
							csrfToken = null;
							return null;
						}
					} catch (error) {
						const metaToken = document.querySelector('meta[name="csrf-token"]');
						if (metaToken) {
							const metaContent = metaToken.getAttribute('content');
							csrfToken = metaContent;
							return csrfToken;
						}
						csrfToken = null;
						return null;
					}
				}
				async function someActionThatNeedsCsrf() {
					const token1 = await getCsrfToken();
					if (!token1) {
						return;
					}
					const token2 = await getCsrfToken();
				}
				someActionThatNeedsCsrf();
				async function handleServer(server, placeId, robloxCookie, targetRegions, specificRegion = null) {
					if (!server || !server.id) {
						return null;
					}
					const serverId = server.id;
					if (robloxServerPlaces[serverId]) {
						const cachedData = robloxServerPlaces[serverId];
						const cachedRegionCode = cachedData.c;
						if (cachedRegionCode) {
							if (cachedRegionCode !== "??") {
								regionServerCounting[cachedRegionCode] = (regionServerCounting[cachedRegionCode] || 0) + 1;
								if (specificRegion && cachedRegionCode === specificRegion) {
									if (!regionSpecificServers[specificRegion]) {
										regionSpecificServers[specificRegion] = [];
									}
									if (!regionSpecificServers[specificRegion].some(s => s.id === serverId)) {
										regionSpecificServers[specificRegion].push(server);
									}
								}
							}
							return cachedRegionCode;
						}
					}
					activeRequests++;
					let regionCode = null;
					let serverLat = null;
					let serverLon = null;
					try {
						if (!csrfToken) {
							await getCsrfToken();
							if (!csrfToken) {
								activeRequests--;
								robloxServerPlaces[serverId] = {
									c: "??",
									l: null
								};
								return null;
							}
						}
						let serverInfoResponse;
						let retry = false;
						let retryCount = 0;
						const MAX_RETRIES = 1;
						do {
							retry = false;
							serverInfoResponse = await fetch(`https://gamejoin.roblox.com/v1/join-game-instance`, {
								method: 'POST',
								headers: {
									"Accept": "application/json",
									"Content-Type": "application/json",
									"Referer": `https://www.roblox.com/games/${placeId}/`,
									"Origin": "https://www.roblox.com",
									"X-Csrf-Token": csrfToken,
								},
								body: JSON.stringify({
									placeId: parseInt(placeId, 10),
									isTeleport: false,
									gameId: serverId,
									gameJoinAttemptId: crypto.randomUUID(),
								}),
								credentials: 'include',
							});
							if (serverInfoResponse.status === 403 && serverInfoResponse.headers.get('x-csrf-token') && retryCount < MAX_RETRIES) {
								csrfToken = null;
								await getCsrfToken();
								if (!csrfToken) {
									robloxServerPlaces[serverId] = {
										c: "??",
										l: null
									};
									activeRequests--;
									return null;
								}
								retry = true;
								retryCount++;
								await delay(100);
							} else if (!serverInfoResponse.ok) {
								if (serverInfoResponse.status === 429) {
									rateLimited = true;
								}
								robloxServerPlaces[serverId] = {
									c: "??",
									l: null
								};
								activeRequests--;
								return null;
							}
						} while (retry);
						const serverInfo = await serverInfoResponse.json();
						try {
							const sessionData = JSON.parse(serverInfo?.joinScript?.SessionId || '{}');
							const latitude = sessionData?.Latitude;
							const longitude = sessionData?.Longitude;
							if (typeof latitude === 'number' && typeof longitude === 'number') {
								if (!robloxProfileUserLocation || robloxProfileUserLocation.latitude !== latitude || robloxProfileUserLocation.longitude !== longitude) {
									robloxProfileUserLocation = {
										latitude: latitude,
										longitude: longitude
									};
								}
							}
						} catch (e) {}
						if (!serverInfo?.joinScript?.UdmuxEndpoints?.[0]?.Address) {
							robloxServerPlaces[serverId] = {
								c: "??",
								l: null
							};
							activeRequests--;
							return null;
						}
						let ip = serverInfo.joinScript.UdmuxEndpoints[0].Address;
						ip = ip.split('.').slice(0, 3).join('.') + '.0';
						let serverLocationData = serverIpMap ? serverIpMap[ip] : null;
						if (!serverLocationData) {
							regionCode = "??";
						} else {
							const countryCode = serverLocationData?.country?.code;
							let stateCode = null;
							serverLat = serverLocationData?.latitude;
							serverLon = serverLocationData?.longitude;
							if (countryCode === "US" && serverLocationData.region?.code) {
								stateCode = serverLocationData.region.code.replace(/-\d+$/, '');
								regionCode = `US-${stateCode}`;
							} else if (countryCode) {
								regionCode = countryCode;
							} else {
								regionCode = "??";
							}
						}
						robloxServerPlaces[serverId] = {
							c: regionCode,
							l: (typeof serverLat === 'number' && typeof serverLon === 'number') ? {
								latitude: serverLat,
								longitude: serverLon
							} : null
						};
						if (regionCode && regionCode !== "??") {
							regionServerCounting[regionCode] = (regionServerCounting[regionCode] || 0) + 1;
							if (!regionReplacedMap[regionCode]) {
								regionReplacedMap[regionCode] = server;
							}
						}
						return regionCode;
					} catch (error) {
						robloxServerPlaces[serverId] = {
							c: "??",
							l: null
						};
						return null;
					} finally {
						activeRequests--;
					}
				}


				function calculateDistance(lat1, lon1, lat2, lon2) {
					if (lat1 === null || lon1 === null || lat2 === null || lon2 === null || typeof lat1 !== 'number' || typeof lon1 !== 'number' || typeof lat2 !== 'number' || typeof lon2 !== 'number' || isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
						return NaN;
					}
					const R = 6371;
					const toRadians = (degrees) => degrees * Math.PI / 180;
					const lat1Rad = toRadians(lat1);
					const lon1Rad = toRadians(lon1);
					const lat2Rad = toRadians(lat2);
					const lon2Rad = toRadians(lon2);
					const latDiff = lat2Rad - lat1Rad;
					const lonDiff = lon2Rad - lon1Rad;
					const a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);
					const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
					const distance = R * c;
					return distance;
				}

				async function joinSpecificRegion(region) {
					let bestServer = null;
					const regionServers = allRobloxServers.filter(server => robloxServerPlaces[server.id]?.c === region);
					if (regionServers.length === 0) {
						alert(`No servers currently listed for region ${getFullLocationName(region)}.`);
						return;
					}
					if (robloxProfileUserLocation) {
						let bestRegionScore = -Infinity;
						const regionServerScores = regionServers.map(server => {
							const serverId = server.id;
							if (server.calculatedPing === undefined || isNaN(server.calculatedPing) || server.calculatedPing === Infinity) {
								const serverLoc = robloxServerPlaces[server.id]?.l;
								if (serverLoc && typeof serverLoc.latitude === 'number') {
									const dist = calculateDistance(robloxProfileUserLocation.latitude, robloxProfileUserLocation.longitude, serverLoc.latitude, serverLoc.longitude);
									if (!isNaN(dist)) {
										server.calculatedPing = Math.round(dist * 0.05);
									} else {
										server.calculatedPing = Infinity;
									}
								} else {
									server.calculatedPing = Infinity;
								}
							}
							let ping = server.calculatedPing ?? Infinity;
							let fps = server.fps || 0;
							if (ping === Infinity) {
								return {
									server,
									score: -Infinity
								};
							}
							const normalizedFPS = fps / 60;
							const pingFactor = Math.max(0, 1 - (ping / 1000));
							const clampedFPS = Math.max(0, Math.min(1, normalizedFPS));
							const fpsWeight = 0.4;
							const pingWeight = 0.6;
							const score = (pingWeight * pingFactor) + (fpsWeight * clampedFPS);
							return {
								server,
								score
							};
						});
						const validRegionServers = regionServerScores.filter(result => result && result.score > -Infinity);
						if (validRegionServers.length > 0) {
							validRegionServers.sort((a, b) => b.score - a.score);
							bestServer = validRegionServers[0].server;
							bestRegionScore = validRegionServers[0].score;
						} else {
							regionServers.sort((a, b) => (b.playing ?? 0) - (a.playing ?? 0));
							bestServer = regionServers.length > 0 ? regionServers[0] : null;
							if (bestServer) {}
						}
					} else {
						regionServers.sort((a, b) => (b.playing ?? 0) - (a.playing ?? 0));
						bestServer = regionServers.length > 0 ? regionServers[0] : null;
						if (bestServer) {}
					}
					if (bestServer && bestServer.id) {
						joinSpecificServer(bestServer.id);
					} else {}
				}

				function joinSpecificServer(serverId) {
					const codeToInject = `
                    (function() {
                        if (typeof Roblox !== 'undefined' && Roblox.GameLauncher && Roblox.GameLauncher.joinGameInstance) {
                          Roblox.GameLauncher.joinGameInstance(parseInt('` + placeId + `', 10), String('` + serverId + `'));
                        } else {
                          console.error("Roblox.GameLauncher.joinGameInstance is not available in page context.");
                        }
                      })();
                    `;
					chrome.runtime.sendMessage({
							action: "injectScript",
							codeToInject: codeToInject
						},
						(response) => {
							if (response && response.success) {} else {}
						});
			
				}

				function getFullLocationName(region) {
					const regionData = regionCoordinates[region];
					if (!regionData) {
						if (region === "??") return "Unknown Region";
						if (region.startsWith("US-")) return `${region.split('-')[1]}, USA`;
						return region;
					}
					let parts = [];
					if (regionData.city && regionData.city !== regionData.country) parts.push(regionData.city);
					if (regionData.state && regionData.country === "United States") parts.push(regionData.state);
					if (regionData.country) parts.push(regionData.country);
					parts = [...new Set(parts.filter(p => p))];
					if (parts.length > 2 && parts[parts.length - 1] === "United States") parts[parts.length - 1] = "USA";
					return parts.join(', ') || region;
				}
				async function fetchThumbnailAssets(tokens) {
					if (!tokens || tokens.length === 0) return {};
					const baseUrl = "https://thumbnails.roblox.com/v1/batch";
					const batchSize = 100;
					const thumbnailMap = {};
					const allRequests = [];
					for (let i = 0; i < tokens.length; i += batchSize) {
						const tokenBatch = tokens.slice(i, i + batchSize);
						if (tokenBatch.length === 0) continue;
						const requests = tokenBatch.map(token => ({
							requestId: `${token}::AvatarHeadshot:48x48:webp:regular`,
							type: "AvatarHeadShot",
							targetId: 0,
							token: token,
							format: "webp",
							size: "48x48"
						}));
						const fetchPromise = fetch(baseUrl, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								'Accept': 'application/json'
							},
							body: JSON.stringify(requests),
							credentials: 'omit'
						}).then(response => response.ok ? response.json() : {
							data: []
						}).then(data => {
							data.data?.forEach(d => {
								const token = d.requestId?.split('::')[0];
								if (token) {
									thumbnailMap[token] = (d.state === "Completed" && d.imageUrl) ? d.imageUrl : null;
								}
							});
						}).catch(error => console.error('roregion: Thumbnail batch error:', error));
						allRequests.push(fetchPromise);
						if (i + batchSize < tokens.length) await delay(250);
					}
					await Promise.all(allRequests);
					return thumbnailMap;
				}

				let isScrollingList = false;
				let scrollTimeout = null;
				const SCROLL_DEBOUNCE_MS = 100;

				function addScrollListenerToListContainer(listContainer) {
					if (!listContainer || listContainer.dataset.scrollListenerAttached) {
						return;
					}
					listContainer.addEventListener('scroll', () => {
						isScrollingList = true;
						clearTimeout(scrollTimeout);
						scrollTimeout = setTimeout(() => {
							isScrollingList = false;
						}, SCROLL_DEBOUNCE_MS);
					}, {
						passive: true
					});
					listContainer.dataset.scrollListenerAttached = 'true';
				}
				async function updateDetailsServers(retries = 5) {
					let gameTitleContainer = document.querySelector(".game-title-container") || document.getElementById('game-detail-meta-data') || document.querySelector('div[class^="game-calls-to-action"] > div:first-child') || document.getElementById('game-details-play-button-container');
					if (!gameTitleContainer) {
						const header = document.querySelector('.container-header');
						if (header) gameTitleContainer = header.nextElementSibling;
					}
					if (!gameTitleContainer) {
						gameTitleContainer = document.querySelector('#game-details .content');
					}
					if (!gameTitleContainer) {
						if (retries > 0) {
							await delay(1000);
							await updateDetailsServers(retries - 1);
						} else {}
						return;
					}
					const isDarkMode = currentTheme === 'dark';
					let existingRegionButton = document.getElementById("regionDropdownButton");
					if (existingRegionButton && regionButtonAdded) {
						const regionDropdown = document.getElementById('regionDropdown');
						const regionListContainer = document.getElementById('roregion-region-list-container');
						const refreshButton = regionDropdown?.querySelector(`button[title="${refreshServerList_Translated}"]`);
						const loadMoreButton = regionDropdown?.querySelector(`button[title="${loadMoreServers_Translated}"]`);
						if (regionListContainer && !regionListContainer.dataset.scrollListenerAttached) {
							addScrollListenerToListContainer(regionListContainer);
						}
						if (regionDropdown && regionListContainer) {
							await regionServersPopulate(regionListContainer);
							regionDropdown.style.backgroundColor = isDarkMode ? 'rgb(39, 41, 48)' : '#ffffff';
							regionDropdown.style.border = isDarkMode ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #ccc';
							regionDropdown.style.color = isDarkMode ? '#ffffff' : '#392213';
							const headerContainer = regionDropdown.querySelector('div:first-child');
							if (headerContainer) {
								headerContainer.style.borderBottom = `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`;
								const titleText = headerContainer.querySelector('p');
								if (titleText) titleText.style.color = isDarkMode ? 'white' : 'rgb(39, 41, 48)';
								if (refreshButton) {
									refreshButton.style.color = (checkForRefreshingCount || rateLimited) ? (isDarkMode ? '#888' : '#999') : (isDarkMode ? '#ccc' : '#555');
									refreshButton.disabled = checkForRefreshingCount || rateLimited;
									refreshButton.style.cursor = (checkForRefreshingCount || rateLimited) ? 'not-allowed' : 'pointer';
								}
								if (loadMoreButton) {
									loadMoreButton.style.color = (checkForRefreshingCount || rateLimited || !nextPageCursor) ? (isDarkMode ? '#888' : '#999') : (isDarkMode ? '#ccc' : '#555');
									loadMoreButton.disabled = checkForRefreshingCount || rateLimited || !nextPageCursor;
									loadMoreButton.style.cursor = (checkForRefreshingCount || rateLimited || !nextPageCursor) ? 'not-allowed' : 'pointer';
								}
								const icon = headerContainer.querySelector('img');
								if (icon && icon.alt === "roregion Icon") {}
							}
							handleRateLimitedState(rateLimited);
							return;
						} else {
							if (existingRegionButton) existingRegionButton.remove();
							const existingDropdown = document.getElementById('regionDropdown');
							if (existingDropdown) existingDropdown.remove();
							regionButtonAdded = false;
						}
					}
					if (regionButtonAdded) return;
					const lineBreak = document.createElement('br');
					const regionDropdownButton = document.createElement('button');
					regionDropdownButton.id = 'regionDropdownButton';
					regionDropdownButton.textContent = 'RoRegion';
					regionDropdownButton.className = 'earth-button';
					regionDropdownButton.innerHTML = `
    RoRegion
    <div class="earth-icon">
        <div class="earth-pulse"></div>
        <svg class="earth-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="1.5"/>
        <path d="M2 12H22" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    </div>
    `;
					const styleElement = document.createElement('style');
					styleElement.textContent = `
    .earth-button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        background: linear-gradient(135deg, #1a3a7e 0%, #2b5fb4 50%, #1e88e5 100%);
        border: none;
        border-radius: 30px;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.4s ease;
        box-shadow: 0 4px 15px rgba(30, 136, 229, 0.3);
        width: 160px;
        height: 48px;
        gap: 8px; /* Add spacing between text and icon */
    }

    .earth-button:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: 0.5s;
    }

    .earth-button:hover:before {
        left: 100%;
    }

    .earth-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 7px 20px rgba(30, 136, 229, 0.4);
        background: linear-gradient(135deg, #2347a1 0%, #3373d6 50%, #29a3ff 100%);
    }

    .earth-button:active {
        transform: translateY(1px);
        box-shadow: 0 3px 10px rgba(30, 136, 229, 0.3);
    }

    .earth-icon {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .earth-svg {
        width: 24px;
        height: 24px;
        transition: all 0.5s ease;
    }

    .earth-button:hover .earth-svg {
        transform: rotate(360deg);
    }

    .earth-pulse {
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        transform: scale(1);
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
        transform: scale(1);
        opacity: 0.7;
        }
        70% {
        transform: scale(1.5);
        opacity: 0;
        }
        100% {
        transform: scale(1);
        opacity: 0;
        }
    }

    
    .earth-button:hover .star {
        animation: twinkle 1.5s infinite;
    }

    @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
    `;
					document.head.appendChild(styleElement);
					const pathSVG = document.createElementNS("http://www.w3.org/2000/svg", "path");
					pathSVG.setAttribute("d", "M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.2847 21.5681 8.67022 20.8071 7.25945M17 5.75H17.005M10.5001 21.8883L10.5002 19.6849C10.5002 19.5656 10.5429 19.4502 10.6205 19.3596L13.1063 16.4594C13.3106 16.2211 13.2473 15.8556 12.9748 15.6999L10.1185 14.0677C10.0409 14.0234 9.97663 13.9591 9.93234 13.8814L8.07046 10.6186C7.97356 10.4488 7.78657 10.3511 7.59183 10.3684L2.06418 10.8607M21 6C21 8.20914 19 10 17 12C15 10 13 8.20914 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6ZM17.25 5.75C17.25 5.88807 17.1381 6 17 6C16.8619 6 16.75 5.88807 16.75 5.75C16.75 5.61193 16.8619 5.5 17 5.5C17.1381 5.5 17.25 5.61193 17.25 5.75Z");
					pathSVG.setAttribute("stroke", isDarkMode ? "white" : "rgb(39, 41, 48)");
					pathSVG.setAttribute("stroke-width", "2");
					pathSVG.setAttribute("stroke-linecap", "round");
					pathSVG.setAttribute("stroke-linejoin", "round");
					const regionDropdown = document.createElement('div');
					regionDropdown.id = 'regionDropdown';
					regionDropdown.style.cssText = `
        position: absolute; top: 100%; left: 0;
        margin-top: 5px; display: none;
        background-color: ${isDarkMode ? 'rgb(39, 41, 48)' : '#ffffff'};
        border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : '#ccc'};
        border-radius: 6px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 10000; padding: 8px; min-width: 300px; max-width: 400px;
        max-height: 400px; overflow: hidden;
        color: ${isDarkMode ? '#ffffff' : '#392213'};
    `;
					const headerContainer = document.createElement('div');
					headerContainer.style.cssText = `
        display: flex; align-items: center;
        padding: 4px 8px 12px 8px;
        border-bottom: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        margin-bottom: 8px;
    `;
					const titleText = document.createElement('p');
					titleText.textContent = regionSelector_Translated;
					titleText.style.cssText = `color: ${isDarkMode ? 'white' : 'rgb(39, 41, 48)'}; font-size: 16px; font-weight: 700; margin: 0; flex-grow: 1;`;
					const buttonContainer = document.createElement('div');
					buttonContainer.style.cssText = `display: flex; gap: 5px;`;
					const refreshButton = document.createElement('button');
					refreshButton.innerHTML = '↻';
					refreshButton.title = refreshServerList_Translated;
					refreshButton.style.cssText = `
        background: none; border: none;
        color: ${isDarkMode ? '#ccc' : '#555'};
        font-size: 18px; cursor: pointer; padding: 0 5px; margin-left: auto;
    `;
					refreshButton.onclick = async (e) => {
						e.stopPropagation();
						if (!checkForRefreshingCount && !rateLimited) {
							refreshButton.disabled = true;
							refreshButton.style.cursor = 'wait';
							refreshButton.style.color = isDarkMode ? '#888' : '#999';
							const listContainer = document.getElementById('roregion-region-list-container');
							if (listContainer) {
								listContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: ${isDarkMode ? '#aaa' : '#666'};">Refreshing...</div>`;
							}
							await getServerInfo(placeId, null, defaultRegions, true);
						}
					};
					const loadMoreButton = document.createElement('button');
					loadMoreButton.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
					loadMoreButton.title = loadMoreServers_Translated;
					loadMoreButton.style.cssText = `
        background: none; border: none;
        color: ${(nextPageCursor) ? (isDarkMode ? '#ccc' : '#555') : (isDarkMode ? '#888' : '#999')};
        font-size: 18px; cursor: ${(nextPageCursor) ? 'pointer' : 'not-allowed'}; padding: 0 5px;
        width: 26px;
        height: 26px;
    `;
					loadMoreButton.disabled = !nextPageCursor;
					loadMoreButton.onclick = async (e) => {
						e.stopPropagation();
						if (!checkForRefreshingCount && !rateLimited && nextPageCursor) {
							loadMoreButton.disabled = true;
							loadMoreButton.style.cursor = 'wait';
							loadMoreButton.style.color = isDarkMode ? '#888' : '#999';
							await getServerInfo(placeId, null, defaultRegions, false, nextPageCursor);
							loadMoreButton.disabled = !nextPageCursor;
							loadMoreButton.style.cursor = nextPageCursor ? 'pointer' : 'not-allowed';
							loadMoreButton.style.color = (nextPageCursor) ? (isDarkMode ? '#ccc' : '#555') : (isDarkMode ? '#888' : '#999');
						}
					};

					function createSharePopup() {
						regionDropdown.style.display = 'none';

						const existingPopup = document.getElementById('roregion-share-popup');
						if (existingPopup) existingPopup.remove();

						const shareOverlay = document.createElement('div');
						shareOverlay.id = 'roregion-share-popup';
						shareOverlay.style.cssText = `
							position: fixed; top: 0; left: 0; width: 100%; height: 100%;
							background: rgba(0, 0, 0, 0.6); z-index: 10020;
							display: flex; justify-content: center; align-items: center;
							opacity: 0; transition: opacity 0.2s ease-in-out;
						`;

						const popup = document.createElement('div');
						popup.style.cssText = `
							background: ${colorMode === 'Light' ? '#ffffff' : '#2a2a2a'}; padding: 30px; border-radius: 12px;
							box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); color: ${colorMode === 'Light' ? '#333333' : 'white'};
							width: 90%; max-width: 400px; position: relative;
							transform: scale(0.9); transition: transform 0.2s ease-in-out;
						`;

						const closeBtn = document.createElement('button');
						closeBtn.innerHTML = '×';
						closeBtn.style.cssText = `
							position: absolute; top: 15px; right: 20px; background: none;
							border: none; color: ${colorMode === 'Light' ? '#666' : '#ccc'}; font-size: 24px; cursor: pointer;
							line-height: 1; padding: 0; width: 24px; height: 24px;
						`;
						closeBtn.onclick = () => shareOverlay.remove();

						const title = document.createElement('h2');
						title.textContent = shareRoRegion_Translated;
						title.style.cssText = `
							margin: 0 0 25px 0; font-size: 24px; font-weight: 600;
							color: ${colorMode === 'Light' ? '#333333' : 'white'};
						`;

						const iconsContainer = document.createElement('div');
						iconsContainer.style.cssText = `
							display: flex; gap: 20px; justify-content: flex-start; margin-bottom: 30px;
						`;

						const redditWrapper = document.createElement('div');
						redditWrapper.style.cssText = `
							display: flex; flex-direction: column; align-items: center;
							cursor: pointer; gap: 8px;
						`;

						const redditIcon = document.createElement('div');
						redditIcon.style.cssText = `
							width: 50px; height: 50px; border-radius: 50%;
							background: ${colorMode === 'Light' ? 'rgb(240, 240, 240)' : 'rgb(64, 64, 64)'};
							transition: transform 0.2s;
							cursor: pointer; display: flex; align-items: center;
							justify-content: center; transform: scale(1);
						`;

						redditIcon.innerHTML = `
							<div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
								<svg width="50" height="50" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
									<g clip-path="url(#clip0_1646_12789_yt468)">
										<mask id="mask0_1646_12789_yt468" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="256" height="256">
											<circle cx="128" cy="128" r="128" fill="white"></circle>
										</mask>
										<g mask="url(#mask0_1646_12789_yt468)">
											<path d="M256 0H0V256H256V0Z" fill="#FF4500"></path>
											<path d="M173.758 146.781C184.109 146.781 192.5 138.39 192.5 128.039C192.5 117.687 184.109 109.296 173.758 109.296C163.407 109.296 155.016 117.687 155.016 128.039C155.016 138.39 163.407 146.781 173.758 146.781Z" fill="url(#paint0_radial_1646_12789_yt468)"></path>
											<path d="M82.7422 146.781C93.0932 146.781 101.484 138.39 101.484 128.039C101.484 117.687 93.0932 109.296 82.7422 109.296C72.3912 109.296 64 117.687 64 128.039C64 138.39 72.3912 146.781 82.7422 146.781Z" fill="url(#paint1_radial_1646_12789_yt468)"></path>
											<path d="M128.313 184.202C157.843 184.202 181.781 166.241 181.781 144.085C181.781 121.929 157.843 103.968 128.313 103.968C98.7829 103.968 74.8442 121.929 74.8442 144.085C74.8442 166.241 98.7829 184.202 128.313 184.202Z" fill="url(#paint2_radial_1646_12789_yt468)"></path>
											<path d="M112.454 140.199C112.14 146.969 107.627 149.476 102.362 149.476C97.0966 149.476 93.0849 145.966 93.3983 139.196C93.7117 132.426 98.2249 127.913 103.49 127.913C108.756 127.913 112.767 133.429 112.454 140.199Z" fill="#842123"></path>
											<path d="M163.102 139.196C163.415 145.966 159.403 149.476 154.138 149.476C148.873 149.476 144.359 147.031 144.046 140.199C143.733 133.429 147.744 127.913 153.01 127.913C158.275 127.913 162.788 132.364 163.102 139.196Z" fill="#842123"></path>
											<path d="M144.109 140.826C144.422 147.157 148.622 149.476 153.511 149.476C158.401 149.476 162.161 146.029 161.911 139.635C161.597 133.304 157.398 129.104 152.508 129.104C147.619 129.104 143.795 134.432 144.109 140.826Z" fill="url(#paint3_radial_1646_12789_yt468)"></path>
											<path d="M112.454 140.826C112.141 147.157 107.941 149.476 103.052 149.476C98.1623 149.476 94.4014 146.029 94.7148 139.635C95.0282 133.304 99.228 129.104 104.117 129.104C109.006 129.104 112.767 134.432 112.454 140.826Z" fill="url(#paint4_radial_1646_12789_yt468)"></path>
											<path d="M128.313 153.989C121.668 153.989 115.337 154.303 109.445 154.867C108.442 154.992 107.815 155.995 108.191 156.873C111.451 164.583 119.224 170.036 128.313 170.036C137.402 170.036 145.112 164.645 148.434 156.873C148.81 155.932 148.183 154.929 147.18 154.867C141.288 154.303 134.957 153.989 128.313 153.989Z" fill="#BBCFDA"></path>
											<path d="M128.313 155.494C121.668 155.494 115.337 155.807 109.508 156.434C108.505 156.559 107.878 157.562 108.254 158.502C111.514 166.338 119.286 171.854 128.313 171.854C137.339 171.854 145.112 166.338 148.371 158.502C148.747 157.562 148.12 156.559 147.118 156.434C141.225 155.807 134.894 155.494 128.313 155.494Z" fill="white"></path>
											<path d="M128.313 154.679C121.794 154.679 115.588 154.992 109.821 155.556C108.818 155.682 108.191 156.685 108.568 157.562C111.827 165.272 119.412 170.726 128.313 170.726C137.214 170.726 144.798 165.335 148.058 157.562C148.434 156.622 147.807 155.619 146.804 155.556C141.037 155.055 134.832 154.679 128.313 154.679Z" fill="url(#paint5_radial_1646_12789_yt468)"></path>
											<path d="M157.586 98.5776C164.925 98.5776 170.874 92.628 170.874 85.2888C170.874 77.9496 164.925 72 157.586 72C150.246 72 144.297 77.9496 144.297 85.2888C144.297 92.628 150.246 98.5776 157.586 98.5776Z" fill="url(#paint6_radial_1646_12789_yt468)"></path>
											<path d="M128.125 105.661C126.558 105.661 125.241 104.971 125.241 103.968C125.241 92.0585 134.894 82.4054 146.804 82.4054C148.371 82.4054 149.688 83.7217 149.688 85.2888C149.688 86.8559 148.371 88.1722 146.804 88.1722C138.091 88.1722 131.008 95.2554 131.008 103.968C131.008 105.034 129.692 105.661 128.125 105.661Z" fill="url(#paint7_radial_1646_12789_yt468)"></path>
											<path d="M109.006 143.96C109.006 146.405 106.374 147.533 103.177 147.533C99.9799 147.533 97.3472 146.405 97.3472 143.96C97.3472 141.515 99.9799 139.51 103.177 139.51C106.374 139.51 109.006 141.453 109.006 143.96Z" fill="#FF6101"></path>
											<path d="M159.278 143.96C159.278 146.405 156.645 147.533 153.448 147.533C150.252 147.533 147.619 146.405 147.619 143.96C147.619 141.515 150.252 139.51 153.448 139.51C156.645 139.51 159.278 141.453 159.278 143.96Z" fill="#FF6101"></path>
											<path d="M107.189 137.253C108.331 137.253 109.257 136.243 109.257 134.996C109.257 133.75 108.331 132.74 107.189 132.74C106.046 132.74 105.12 133.75 105.12 134.996C105.12 136.243 106.046 137.253 107.189 137.253Z" fill="#FFC49C"></path>
											<path d="M156.645 137.253C157.788 137.253 158.714 136.243 158.714 134.996C158.714 133.75 157.788 132.74 156.645 132.74C155.503 132.74 154.577 133.75 154.577 134.996C154.577 136.243 155.503 137.253 156.645 137.253Z" fill="#FFC49C"></path>
										</g>
									</g>
									<defs>
										<radialGradient id="paint0_radial_1646_12789_yt468" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(172.951 117.92) scale(37.548 32.7547)">
											<stop stop-color="#FEFFFF"></stop>
											<stop offset="0.4" stop-color="#FEFFFF"></stop>
											<stop offset="0.51" stop-color="#F9FCFC"></stop>
											<stop offset="0.62" stop-color="#EDF3F5"></stop>
											<stop offset="0.7" stop-color="#DEE9EC"></stop>
											<stop offset="0.72" stop-color="#D8E4E8"></stop>
											<stop offset="0.76" stop-color="#CCD8DF"></stop>
											<stop offset="0.8" stop-color="#C8D5DD"></stop>
											<stop offset="0.83" stop-color="#CCD6DE"></stop>
											<stop offset="0.85" stop-color="#D8DBE2"></stop>
											<stop offset="0.88" stop-color="#EDE3E9"></stop>
											<stop offset="0.9" stop-color="#FFEBEF"></stop>
										</radialGradient>
										<radialGradient id="paint1_radial_1646_12789_yt468" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81.9856 117.92) scale(37.548 32.7547)">
											<stop stop-color="#FEFFFF"></stop>
											<stop offset="0.4" stop-color="#FEFFFF"></stop>
											<stop offset="0.51" stop-color="#F9FCFC"></stop>
											<stop offset="0.62" stop-color="#EDF3F5"></stop>
											<stop offset="0.7" stop-color="#DEE9EC"></stop>
											<stop offset="0.72" stop-color="#D8E4E8"></stop>
											<stop offset="0.76" stop-color="#CCD8DF"></stop>
											<stop offset="0.8" stop-color="#C8D5DD"></stop>
											<stop offset="0.83" stop-color="#CCD6DE"></stop>
											<stop offset="0.85" stop-color="#D8DBE2"></stop>
											<stop offset="0.88" stop-color="#EDE3E9"></stop>
											<stop offset="0.9" stop-color="#FFEBEF"></stop>
										</radialGradient>
										<radialGradient id="paint2_radial_1646_12789_yt468" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(128.657 112.666) scale(113.26 79.5228)">
											<stop stop-color="#FEFFFF"></stop>
											<stop offset="0.4" stop-color="#FEFFFF"></stop>
											<stop offset="0.51" stop-color="#F9FCFC"></stop>
											<stop offset="0.62" stop-color="#EDF3F5"></stop>
											<stop offset="0.7" stop-color="#DEE9EC"></stop>
											<stop offset="0.72" stop-color="#D8E4E8"></stop>
											<stop offset="0.76" stop-color="#CCD8DF"></stop>
											<stop offset="0.8" stop-color="#C8D5DD"></stop>
											<stop offset="0.83" stop-color="#CCD6DE"></stop>
											<stop offset="0.85" stop-color="#D8DBE2"></stop>
											<stop offset="0.88" stop-color="#EDE3E9"></stop>
											<stop offset="0.9" stop-color="#FFEBEF"></stop>
										</radialGradient>
										<radialGradient id="paint3_radial_1646_12789_yt468" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(152.686 145.133) rotate(180) scale(9.46286 13.8923)">
											<stop stop-color="#FF6600"></stop>
											<stop offset="0.5" stop-color="#FF4500"></stop>
											<stop offset="0.7" stop-color="#FC4301"></stop>
											<stop offset="0.82" stop-color="#F43F07"></stop>
											<stop offset="0.92" stop-color="#E53812"></stop>
											<stop offset="1" stop-color="#D4301F"></stop>
										</radialGradient>
										<radialGradient id="paint4_radial_1646_12789_yt468" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(103.482 145.133) scale(9.46287 13.8923)">
											<stop stop-color="#FF6600"></stop>
											<stop offset="0.5" stop-color="#FF4500"></stop>
											<stop offset="0.7" stop-color="#FC4301"></stop>
											<stop offset="0.82" stop-color="#F43F07"></stop>
											<stop offset="0.92" stop-color="#E53812"></stop>
											<stop offset="1" stop-color="#D4301F"></stop>
										</radialGradient>
										<radialGradient id="paint5_radial_1646_12789_yt468" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127.413 172.674) scale(33.3675 22.0084)">
											<stop stop-color="#172E35"></stop>
											<stop offset="0.29" stop-color="#0E1C21"></stop>
											<stop offset="0.73" stop-color="#030708"></stop>
											<stop offset="1"></stop>
										</radialGradient>
										<radialGradient id="paint6_radial_1646_12789_yt468" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(156.842 71.8785) scale(29.2901 29.2901)">
											<stop stop-color="#FEFFFF"></stop>
											<stop offset="0.4" stop-color="#FEFFFF"></stop>
											<stop offset="0.51" stop-color="#F9FCFC"></stop>
											<stop offset="0.62" stop-color="#EDF3F5"></stop>
											<stop offset="0.7" stop-color="#DEE9EC"></stop>
											<stop offset="0.72" stop-color="#D8E4E8"></stop>
											<stop offset="0.76" stop-color="#CCD8DF"></stop>
											<stop offset="0.8" stop-color="#C8D5DD"></stop>
											<stop offset="0.83" stop-color="#CCD6DE"></stop>
											<stop offset="0.85" stop-color="#D8DBE2"></stop>
											<stop offset="0.88" stop-color="#EDE3E9"></stop>
											<stop offset="0.9" stop-color="#FFEBEF"></stop>
										</radialGradient>
										<radialGradient id="paint7_radial_1646_12789_yt468" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(144.633 103.809) scale(24.0077)">
											<stop offset="0.48" stop-color="#7A9299"></stop>
											<stop offset="0.67" stop-color="#172E35"></stop>
											<stop offset="0.75"></stop>
											<stop offset="0.82" stop-color="#172E35"></stop>
										</radialGradient>
										<clipPath id="clip0_1646_12789_yt468">
											<rect width="256" height="256" fill="white"></rect>
										</clipPath>
									</defs>
								</svg>
							</div>
						`;

						const redditLabel = document.createElement('div');
						redditLabel.textContent = 'Reddit';
						redditLabel.style.cssText = `
							color: ${colorMode === 'Light' ? 'rgb(102, 102, 102)' : 'rgb(204, 204, 204)'}; font-size: 12px; text-align: center;
						`;

						redditWrapper.appendChild(redditIcon);
						redditWrapper.appendChild(redditLabel);

						const xWrapper = document.createElement('div');
						xWrapper.style.cssText = `
							display: flex; flex-direction: column; align-items: center;
							cursor: pointer; gap: 8px;
						`;

						const xIcon = document.createElement('div');
						xIcon.style.cssText = `
							width: 50px; height: 50px; border-radius: 50%;
							background: ${colorMode === 'Light' ? 'rgb(240, 240, 240)' : 'rgb(64, 64, 64)'};
 							transition: transform 0.2s;
							cursor: pointer; display: flex; align-items: center;
							justify-content: center; transform: scale(1);
						`;

						xIcon.innerHTML = `
							<svg width="50" height="50" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="192" height="192" rx="96" fill="black"></rect>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M42 47H76L100 78.5L127 47H144L107.5 88.5L150 145H117L91 111L61 145H44L83 100.5L42 47ZM62 57H71.5L130.5 135H121.5L62 57Z" fill="white"></path>
							</svg>
						`;

						const xLabel = document.createElement('div');
						xLabel.textContent = 'X (Twitter)';
						xLabel.style.cssText = `
							color: ${colorMode === 'Light' ? 'rgb(102, 102, 102)' : 'rgb(204, 204, 204)'}; font-size: 12px; text-align: center;
						`;

						xWrapper.appendChild(xIcon);
						xWrapper.appendChild(xLabel);

						const facebookWrapper = document.createElement('div');
						facebookWrapper.style.cssText = `
							display: flex; flex-direction: column; align-items: center;
							cursor: pointer; gap: 8px;
						`;

						const facebookIcon = document.createElement('div');
						facebookIcon.style.cssText = `
							width: 50px; height: 50px; border-radius: 50%;
							background: ${colorMode === 'Light' ? 'rgb(240, 240, 240)' : 'rgb(64, 64, 64)'};
 							transition: transform 0.2s;
							cursor: pointer; display: flex; align-items: center;
							justify-content: center; transform: scale(1);
						`;

						facebookIcon.innerHTML = `
							<svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g fill="none" fill-rule="evenodd">
									<path d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z" fill="#3B5998" fill-rule="nonzero"></path>
									<path d="M25.7305108 45h5.4583577V30.0073333h4.0947673l.8098295-4.6846666h-4.9045968V21.928c0-1.0943333.7076019-2.2433333 1.7188899-2.2433333h2.7874519V15h-3.4161354v.021c-5.3451414.194-6.4433395 3.2896667-6.5385744 6.5413333h-.0099897v3.7603334H23v4.6846666h2.7305108V45z" fill="#FFF"></path>
								</g>
							</svg>
						`;

						const facebookLabel = document.createElement('div');
						facebookLabel.textContent = 'Facebook';
						facebookLabel.style.cssText = `
							color: ${colorMode === 'Light' ? 'rgb(102, 102, 102)' : 'rgb(204, 204, 204)'}; font-size: 12px; text-align: center;
						`;

						facebookWrapper.appendChild(facebookIcon);
						facebookWrapper.appendChild(facebookLabel);

						redditWrapper.onmouseenter = () => redditIcon.style.transform = 'scale(1.1)';
						redditWrapper.onmouseleave = () => redditIcon.style.transform = 'scale(1)';
						redditWrapper.onclick = () => {
							window.open('https://reddit.com/submit?url=' + encodeURIComponent('https://roregion.com/'), '_blank');
						};

						xWrapper.onmouseenter = () => xIcon.style.transform = 'scale(1.1)';
						xWrapper.onmouseleave = () => xIcon.style.transform = 'scale(1)';
						xWrapper.onclick = () => {
							window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://roregion.com/'), '_blank');
						};

						facebookWrapper.onmouseenter = () => facebookIcon.style.transform = 'scale(1.1)';
						facebookWrapper.onmouseleave = () => facebookIcon.style.transform = 'scale(1)';
						facebookWrapper.onclick = () => {
							window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://roregion.com/'), '_blank');
						};

						iconsContainer.appendChild(redditWrapper);
						iconsContainer.appendChild(xWrapper);
						iconsContainer.appendChild(facebookWrapper);

						const whatsappWrapper = document.createElement('div');
						whatsappWrapper.style.cssText = `
							display: flex; flex-direction: column; align-items: center;
							cursor: pointer; gap: 8px;
						`;

						const whatsappIcon = document.createElement('div');
						whatsappIcon.style.cssText = `
							width: 50px; height: 50px; border-radius: 50%;
							background: ${colorMode === 'Light' ? 'rgb(240, 240, 240)' : 'rgb(64, 64, 64)'};
							transition: transform 0.2s;
							cursor: pointer; display: flex; align-items: center;
							justify-content: center; transform: scale(1);
						`;

						whatsappIcon.innerHTML = `
							<div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
									<g fill="none" fill-rule="evenodd">
										<circle cx="30" cy="30" r="30" fill="#25D366"></circle>
										<path d="M39.7746 19.3513C37.0512 16.5467 33.42 15 29.5578 15C21.6022 15 15.1155 21.6629 15.1155 29.8725C15.1155 32.4901 15.7758 35.0567 17.0467 37.3003L15 45L22.6585 42.9263C24.7712 44.1161 27.148 44.728 29.5578 44.728C37.5134 44.728 44 38.0652 44 29.8555C44 25.8952 42.498 22.1558 39.7746 19.3513ZM29.5578 42.2295C27.3956 42.2295 25.2829 41.6346 23.4508 40.5127L23.0051 40.2408L18.4661 41.4646L19.671 36.9093L19.3904 36.4334C18.1855 34.4618 17.5583 32.1841 17.5583 29.8555C17.5583 23.0397 22.9556 17.4986 29.5743 17.4986C32.7763 17.4986 35.7968 18.7904 38.0581 21.119C40.3193 23.4476 41.5737 26.5581 41.5737 29.8555C41.5572 36.6884 36.1764 42.2295 29.5578 42.2295ZM36.1434 32.966C35.7803 32.779 34.0142 31.8782 33.6841 31.7592C33.354 31.6402 33.1064 31.5722 32.8754 31.9462C32.6278 32.3201 31.9511 33.153 31.7365 33.4079C31.5219 33.6629 31.3238 33.6799 30.9607 33.4929C30.5976 33.306 29.4422 32.915 28.0558 31.6572C26.9829 30.6714 26.2567 29.4476 26.0421 29.0907C25.8275 28.7167 26.0256 28.5127 26.2072 28.3258C26.3722 28.1558 26.5703 27.8839 26.7518 27.6799C26.9334 27.4589 26.9994 27.3059 27.115 27.068C27.2305 26.813 27.181 26.6091 27.082 26.4221C26.9994 26.2351 26.2732 24.3994 25.9761 23.6686C25.679 22.9377 25.3819 23.0397 25.1673 23.0227C24.9528 23.0057 24.7217 23.0057 24.4741 23.0057C24.2265 23.0057 23.8469 23.0907 23.5168 23.4646C23.1867 23.8385 22.2459 24.7394 22.2459 26.5581C22.2459 28.3938 23.5333 30.1445 23.7149 30.3994C23.8964 30.6544 26.2567 34.3938 29.8714 36.0085C30.7297 36.3994 31.4064 36.6204 31.9345 36.7904C32.7928 37.0793 33.5851 37.0283 34.2123 36.9433C34.9055 36.8414 36.3415 36.0425 36.6551 35.1756C36.9522 34.3088 36.9522 33.5609 36.8697 33.4079C36.7541 33.255 36.5065 33.153 36.1434 32.966Z" fill="white"></path>
									</g>
								</svg>
							</div>
						`;

						const whatsappLabel = document.createElement('div');
						whatsappLabel.textContent = 'WhatsApp';
						whatsappLabel.style.cssText = `
							color: ${colorMode === 'Light' ? 'rgb(102, 102, 102)' : 'rgb(204, 204, 204)'}; font-size: 12px; text-align: center;
						`;

						whatsappWrapper.appendChild(whatsappIcon);
						whatsappWrapper.appendChild(whatsappLabel);

						whatsappWrapper.onmouseenter = () => whatsappIcon.style.transform = 'scale(1.1)';
						whatsappWrapper.onmouseleave = () => whatsappIcon.style.transform = 'scale(1)';
						whatsappWrapper.onclick = () => {
							window.open('https://wa.me/?text=https://roregion.com?utm_source=item-share-whatsapp', '_blank');
						};

						iconsContainer.appendChild(whatsappWrapper);

						const urlContainer = document.createElement('div');
						urlContainer.style.cssText = `
							background: ${colorMode === 'Light' ? '#d8d8d8' : '#1a1a1a'}; border-radius: 8px; padding: 15px;
							display: flex; align-items: center; gap: 10px;
						`;

						const urlInput = document.createElement('input');
						urlInput.value = 'https://roregion.com/';
						urlInput.readOnly = true;
						urlInput.style.cssText = `
							flex: 1; background: none; border: none; color: ${colorMode === 'Light' ? '#333' : '#ccc'};
							font-size: 14px; outline: none;
						`;

						const copyBtn = document.createElement('button');
						copyBtn.textContent = copyButton_Translated;
						copyBtn.style.cssText = `
							background: #1976d2; color: white; border: none;
							padding: 8px 16px; border-radius: 6px; cursor: pointer;
							font-size: 14px; font-weight: 600;
							transition: background 0.2s;
						`;
						copyBtn.onmouseenter = () => copyBtn.style.background = '#1565c0';
						copyBtn.onmouseleave = () => copyBtn.style.background = '#1976d2';
						
						copyBtn.onclick = () => {
							navigator.clipboard.writeText(urlInput.value);
							copyBtn.textContent = copied_Translated;
							setTimeout(() => copyBtn.textContent = copyButton_Translated, 1500);
						};

						urlContainer.appendChild(urlInput);
						urlContainer.appendChild(copyBtn);
						popup.appendChild(closeBtn);
						popup.appendChild(title);
						popup.appendChild(iconsContainer);
						popup.appendChild(urlContainer);
						shareOverlay.appendChild(popup);
						document.body.appendChild(shareOverlay);

						requestAnimationFrame(() => {
							shareOverlay.style.opacity = '1';
							popup.style.transform = 'scale(1)';
						});

						shareOverlay.onclick = (e) => {
							if (e.target === shareOverlay) shareOverlay.remove();
						};

						const handleEscape = (e) => {
							if (e.key === 'Escape') {
								shareOverlay.remove();
								document.removeEventListener('keydown', handleEscape);
							}
						};
						document.addEventListener('keydown', handleEscape);
					}

					function createShareButton() {
						const btn = document.createElement('button');
						btn.style.cssText = `
							height: 36px; 
							border: none; 
							border-radius: 6px;
							cursor: pointer; 
							padding: 8px 12px; 
							transition: transform 0.2s;
							background: linear-gradient(135deg, #1a3a7e 0%, #2b5fb4 50%, #1e88e5 100%);
							display: flex; 
							align-items: center; 
							justify-content: center;
							gap: 8px;
							order: 9999; 
							margin-left: auto;
							white-space: nowrap;
							min-width: fit-content;
						`;
					
						const img = document.createElement('img');
						img.src = chrome.runtime.getURL('icons/shareButton.png');
						img.style.cssText = 'width: 20px; height: 20px; flex-shrink: 0;';
						img.alt = shareRoRegion_Translated;
					
						const text = document.createElement('span');
						text.textContent = shareButton_Translated;
						text.style.cssText = `
							color: white;
							font-size: 14px;
							font-weight: 500;
							font-family: system-ui, -apple-system, sans-serif;
						`;
					
						btn.appendChild(img);
						btn.appendChild(text);
						btn.onmouseenter = () => btn.style.transform = 'scale(1.05)';
						btn.onmouseleave = () => btn.style.transform = 'scale(1)';
						btn.onclick = () => createSharePopup();
					
						return btn;
					}

					headerContainer.appendChild(createShareButton());
					headerContainer.append(titleText, buttonContainer);
					regionDropdown.appendChild(headerContainer);
					const regionListContainer = document.createElement('div');
					regionListContainer.id = 'roregion-region-list-container';
					regionListContainer.style.cssText = `
        max-height: calc(400px - 60px);
        overflow-y: auto; overflow-x: hidden; padding-right: 5px;
    `;
					addScrollListenerToListContainer(regionListContainer);
					await regionServersPopulate(regionListContainer);
					regionDropdown.appendChild(regionListContainer);
					if (window.getComputedStyle(gameTitleContainer).position === 'static') {
						gameTitleContainer.style.position = 'relative';
					}
					const playButton = gameTitleContainer.querySelector('[id^="game-details-play-button"], .btn-common-play-game-lg, .play-button-container > button');
					if (playButton && playButton.parentNode === gameTitleContainer) {
						playButton.parentNode.insertBefore(regionDropdownButton, playButton.nextSibling);
						gameTitleContainer.appendChild(regionDropdown);
					} else {
						gameTitleContainer.appendChild(lineBreak)
						gameTitleContainer.appendChild(regionDropdownButton);
						gameTitleContainer.appendChild(regionDropdown);
					}
					regionButtonAdded = true;
					regionDropdown.style.left = '0px';
					regionDropdown.style.transform = `translateX(${regionDropdownButton.offsetLeft}px)`;
					regionDropdownButton.addEventListener('click', (event) => {
						event.stopPropagation();
						const isOpen = regionDropdown.style.display === 'block';
						regionDropdown.style.display = isOpen ? 'none' : 'block';
						if (!isOpen) {
							regionServersPopulate(regionListContainer);
							regionDropdown.style.transform = `translateX(${regionDropdownButton.offsetLeft}px)`;
						}
					});
					document.addEventListener('click', (event) => {
						if (!regionDropdown.contains(event.target) && !regionDropdownButton.contains(event.target)) {
							regionDropdown.style.display = 'none';
						}
					});
					handleRateLimitedState(rateLimited);
					refreshButton.disabled = checkForRefreshingCount || rateLimited;
					refreshButton.style.cursor = (checkForRefreshingCount || rateLimited) ? 'not-allowed' : 'pointer';
					refreshButton.style.color = (checkForRefreshingCount || rateLimited) ? (isDarkMode ? '#888' : '#999') : (isDarkMode ? '#ccc' : '#555');
					loadMoreButton.disabled = checkForRefreshingCount || rateLimited || !nextPageCursor;
					loadMoreButton.style.cursor = (checkForRefreshingCount || rateLimited || !nextPageCursor) ? 'not-allowed' : 'pointer';
					loadMoreButton.style.color = (checkForRefreshingCount || rateLimited || !nextPageCursor) ? (isDarkMode ? '#888' : '#999') : (isDarkMode ? '#ccc' : '#555');
				}

				function getRegionContinentInfo(regionCode, coordinatesMap) {
					if (!regionCode || regionCode === '??' || !coordinatesMap || typeof coordinatesMap !== 'object') {
						return unknown_Translated;
					}
					const regionInfo = coordinatesMap[regionCode];
					if (!regionInfo || !regionInfo.country) {
						return unknown_Translated;
					}
					const country = regionInfo.country;
					switch (country) {
						case "United States":
							return "North America";
						case "Germany":
						case "France":
						case "Netherlands":
						case "United Kingdom":
							return "Europe";
						case "Singapore":
						case "Japan":
						case "India":
							return "Asia";
						case "Australia":
							return "Oceania";
						case "Brazil":
							return "South America";
						default:
							return unknown_Translated;
					}
				}
				async function regionServersPopulate(listContainer) {
					if (!listContainer) return;
					const isDarkMode = currentTheme === 'dark';
					listContainer.innerHTML = '';
					if (checkForRefreshingCount && allRobloxServers.length === 0) {
						listContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: ${isDarkMode ? '#aaa' : '#666'};">Loading regions...</div>`;
						return;
					}
					if (rateLimited) {
						listContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: orange;">${rateLimit_Translated}</div>`;
						return;
					}
					const foundRegionCodes = Object.keys(regionServerCounting).filter(rc => rc !== "??");
					const allKnownRegionCodes = new Set([...defaultRegions, ...foundRegionCodes]);
					const unknownServerCount = regionServerCounting['???'] || 0;
					const regionsData = Array.from(allKnownRegionCodes).map(code => ({
						code: code,
						name: getFullLocationName(code, regionCoordinates),
						count: regionServerCounting[code] || 0,
						continent: getRegionContinentInfo(code, regionCoordinates)
					}));
					const groupedRegions = regionsData.reduce((acc, region) => {
						const continent = region.continent;
						if (!acc[continent]) {
							acc[continent] = [];
						}
						acc[continent].push(region);
						return acc;
					}, {});
					for (const continent in groupedRegions) {
						groupedRegions[continent].sort((a, b) => {
							if (a.code === "BR") return 1;
							if (b.code === "BR") return -1;
							if (a.count > 0 && b.count === 0) return -1;
							if (a.count === 0 && b.count > 0) return 1;
							if (robloxProfileUserLocation && typeof robloxProfileUserLocation.latitude === 'number' && typeof robloxProfileUserLocation.longitude === 'number') {
								const coordsA = regionCoordinates[a.code];
								const coordsB = regionCoordinates[b.code];
								if (coordsA && coordsB) {
									const distanceA = calculateDistance(robloxProfileUserLocation.latitude, robloxProfileUserLocation.longitude, coordsA.latitude, coordsA.longitude);
									const distanceB = calculateDistance(robloxProfileUserLocation.latitude, robloxProfileUserLocation.longitude, coordsB.latitude, coordsB.longitude);
									if (!isNaN(distanceA) && !isNaN(distanceB)) {
										return distanceA - distanceB;
									}
								}
							}
							return a.name.localeCompare(b.name);
						});
					}
					const sortedContinents = Object.keys(groupedRegions).sort((a, b) => {
						const hasRegionBR_A = groupedRegions[a].some(region => region.code === "BR");
						const hasRegionBR_B = groupedRegions[b].some(region => region.code === "BR");
						if (hasRegionBR_A && !hasRegionBR_B) return 1;
						if (!hasRegionBR_A && hasRegionBR_B) return -1;
						if (a === unknown_Translated && b !== unknown_Translated) return 1;
						if (a !== unknown_Translated && b === unknown_Translated) return -1;
						if (a === unknown_Translated && b === unknown_Translated) return 0;
						if (robloxProfileUserLocation && typeof robloxProfileUserLocation.latitude === 'number' && typeof robloxProfileUserLocation.longitude === 'number') {
							const avgDistanceA = calculateAverageDistanceForContinent(groupedRegions[a], robloxProfileUserLocation);
							const avgDistanceB = calculateAverageDistanceForContinent(groupedRegions[b], robloxProfileUserLocation);
							if (!isNaN(avgDistanceA) && !isNaN(avgDistanceB)) {
								return avgDistanceA - avgDistanceB;
							}
						}
						const totalServersA = groupedRegions[a].reduce((sum, region) => sum + region.count, 0);
						const totalServersB = groupedRegions[b].reduce((sum, region) => sum + region.count, 0);
						if (totalServersB !== totalServersA) {
							return totalServersB - totalServersA;
						}
						return a.localeCompare(b);
					});

					function calculateAverageDistanceForContinent(regions, userLoc) {
						if (!regions || !regions.length || !userLoc) return NaN;
						let totalDistance = 0;
						let countWithCoords = 0;
						for (const region of regions) {
							const coords = regionCoordinates[region.code];
							if (coords && typeof coords.latitude === 'number' && typeof coords.longitude === 'number') {
								const distance = calculateDistance(userLoc.latitude, userLoc.longitude, coords.latitude, coords.longitude);
								if (!isNaN(distance)) {
									totalDistance += distance;
									countWithCoords++;
								}
							}
						}
						return countWithCoords > 0 ? totalDistance / countWithCoords : NaN;
					}
					let totalServersFound = regionsData.reduce((sum, region) => sum + region.count, 0) + unknownServerCount;
					if (sortedContinents.length === 0 && unknownServerCount === 0 && !checkForRefreshingCount) {
						listContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: ${isDarkMode ? '#aaa' : '#666'};">No servers found. Try refreshing.</div>`;
						return;
					}
					let isFirstHeader = true;
					sortedContinents.forEach(continent => {
						const regionsInGroup = groupedRegions[continent];
						if (regionsInGroup.length === 0 && continent !== unknown_Translated) return;
						const header = document.createElement('div');
						header.textContent = continent;
						header.style.cssText = `
            padding: 8px 12px 4px 12px; font-size: 12px;
            font-weight: 600; color: ${isDarkMode ? '#eeeeee' : '#555555'};
            text-transform: uppercase; letter-spacing: 0.5px;
            border-top: ${isFirstHeader ? 'none' : `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`};
            margin-top: ${isFirstHeader ? '0px' : '8px'};
            background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'};
            position: relative; z-index: 1;
        `;
						listContainer.appendChild(header);
						isFirstHeader = false;
						regionsInGroup.forEach((region, index) => {
							const {
								code: regionCode,
								name: fullName,
								count
							} = region;
							const listItem = document.createElement('div');
							listItem.style.cssText = `
                display: flex; justify-content: space-between; align-items: center;
                padding: 8px 12px; cursor: ${count > 0 ? 'pointer' : 'default'};
                border-top: ${index === 0 ? 'none' : `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`};
                transition: background-color 0.15s ease; opacity: ${count > 0 ? '1' : '0.6'};
                background-color: transparent;
            `;
							if (count > 0) {
								listItem.onmouseover = () => {
									if (!isScrollingList) {
										listItem.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)';
									}
								};
								listItem.onmouseout = () => {
									listItem.style.backgroundColor = 'transparent';
								};
								listItem.onclick = () => {
									if (regionSelectorShowServerListOverlay) {
										regionOverlaySystem(regionCode);
									} else {
										joinSpecificRegion(regionCode);
									}
									const dropdown = document.getElementById('regionDropdown');
									if (dropdown) dropdown.style.display = 'none';
								};
							} else {
								listItem.title = `No servers currently found in ${fullName}`;
							}
							const nameSpan = document.createElement('span');
							nameSpan.textContent = fullName;
							nameSpan.style.cssText = `font-size: 14px; font-weight: 500; color: ${isDarkMode ? '#e0e0e0' : '#333333'};`;
							const countSpan = document.createElement('span');
							const translation = count === 1 ? serversText_Translated : serversText_Plural_Translated;
							countSpan.textContent = translation.replace('SERVER_COUNT', count);
							countSpan.style.cssText = `
                font-size: 13px; font-weight: 400;
                color: ${count > 0 ? (isDarkMode ? '#a0a0a0' : '#666666') : (isDarkMode ? '#777' : '#999')};
                background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'};
                padding: 2px 6px; border-radius: 4px;
            `;
							listItem.append(nameSpan, countSpan);
							listContainer.appendChild(listItem);
						});
					});
					if (unknownServerCount > 0) {
						let unknownHeader = Array.from(listContainer.children).find(child => child.tagName === 'DIV' && child.textContent === unknown_Translated && child.style.fontWeight === '600');
						if (!unknownHeader) {
							unknownHeader = document.createElement('div');
							unknownHeader.textContent = unknown_Translated;
							unknownHeader.style.cssText = `
                padding: 8px 12px 4px 12px; font-size: 12px;
                font-weight: 600; color: ${isDarkMode ? '#eeeeee' : '#555555'};
                text-transform: uppercase; letter-spacing: 0.5px;
                border-top: ${listContainer.children.length === 0 ? 'none' : `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`};
                margin-top: ${listContainer.children.length === 0 ? '0px' : '8px'};
                background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'};
                position: relative; z-index: 1;
             `;
							listContainer.appendChild(unknownHeader);
						}
						const listItem = document.createElement('div');
						listItem.style.cssText = `
            display: flex; justify-content: space-between; align-items: center;
            padding: 8px 12px; cursor: default;
            border-top: ${unknownHeader.nextElementSibling === null ? 'none' : `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`};
            opacity: 1;
            background-color: transparent;
        `;
						listItem.onmouseover = null;
						listItem.onmouseout = null;
						listItem.onclick = null;
						listItem.title = `Servers with unidentifiable locations (${unknownServerCount} found)`;
						const nameSpan = document.createElement('span');
						nameSpan.textContent = unknownLocation_Translated;
						nameSpan.style.cssText = `font-size: 14px; font-weight: 500; color: ${isDarkMode ? '#e0e0e0' : '#333333'};`;
						const countSpan = document.createElement('span');
						countSpan.textContent = `${unknownServerCount} server${unknownServerCount !== 1 ? 's' : ''}`;
						countSpan.style.cssText = `
            font-size: 13px; font-weight: 400;
            color: ${isDarkMode ? '#a0a0a0' : '#666666'};
            background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'};
            padding: 2px 6px; border-radius: 4px;
        `;
						listItem.append(nameSpan, countSpan);
						listContainer.insertBefore(listItem, unknownHeader.nextSibling);
					}
				}
				async function regionOverlaySystem(region) {
					const existingOverlay = document.getElementById('roregion-server-list-overlay');
					const existingAd = document.getElementById('roearn-ad-overlay');
					if (isFetchingServersForRegion[region] || existingOverlay || existingAd) {
						return;
					}

					isFetchingServersForRegion[region] = true;
					let modalOverlay = null;
					let serverListScrollHandlerRef = null;
					const body = document.querySelector("body");
					const originalBodyOverflow = body.style.overflow;
					try {
						serverListState = {
							...serverListState,
							visibleServerCount: 0,
							fetchedServerIds: new Set(),
							renderedServerIds: new Set(),
							servers: [],
							loading: false,
							renderedServersData: new Map(),
							virtualized: true,
							viewportHeight: 0,
							itemHeight: 175,
							visibleRange: {
								start: 0,
								end: 0
							},
							currentRegion: region
						};
						modalOverlay = document.createElement('div');
						modalOverlay.id = 'roregion-server-list-overlay';
						modalOverlay.style.cssText = `
                        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                        display: flex; justify-content: center; align-items: center;
                        z-index: 10010; background-color: rgba(0, 0, 0, 0.6);
                        transition: opacity 0.2s ease-in-out; opacity: 0;
                    `;
						body.style.overflow = "hidden";
						const modalContent = document.createElement('div');
						modalContent.id = 'roregion-server-list-content';
						const isDarkMode = currentTheme === 'dark';
						modalContent.style.cssText = `
                        background-color: ${isDarkMode ? 'rgb(30, 30, 33)' : '#ffffff'}; padding: 0;
                        border-radius: 8px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                        color: ${isDarkMode ? 'white' : 'rgb(39, 41, 48)'};
                        width: 90%;
                        max-width: 900px;
                        max-height: 85vh;
                        display: flex; flex-direction: column; overflow: hidden;
                        transform: scale(0.95);
                        transition: transform 0.2s ease-in-out, max-width 0.2s ease, max-height 0.2s ease;
                    `;
						const headerContainer = document.createElement('div');
						headerContainer.style.cssText = `padding: 15px 20px; border-bottom: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;`;
						const title = document.createElement('h1');
						title.textContent = `${serversIn_Translated} ${getFullLocationName(region)}`;
						title.style.cssText = `margin: 0; font-size: 20px; font-weight: 700;`;
						headerContainer.appendChild(title);
						const controlsContainer = document.createElement('div');
						controlsContainer.style.cssText = `display: flex; align-items: center; gap: 10px;`;
						const sortDropdown = document.createElement('select');
						sortDropdown.id = 'serverSortDropdown';
						sortDropdown.style.cssText = `
                        padding: 6px 10px; border-radius: 6px; cursor: pointer; font-size: 14px;
                        background-color: ${isDarkMode ? '#333' : '#f0f0f0'}; color: ${isDarkMode ? 'white' : 'rgb(39, 41, 48)'};
                        border: 1px solid ${isDarkMode ? '#555' : '#ccc'};
                    `;
						const sortOptions = [{
							value: 'ping_lowest',
							text: sortPingLowest_Translated
						}, {
							value: 'players_highest',
							text: sortPlayersHighest_Translated
						}, {
							value: 'players_lowest',
							text: sortPlayersLowest_Translated
						}];
						sortOptions.forEach(o => {
							const el = document.createElement('option');
							el.value = o.value;
							el.textContent = o.text;
							sortDropdown.appendChild(el);
						});
						sortDropdown.value = serverListState.currentSort;
						sortDropdown.onchange = async (event) => {
							serverListState.currentSort = event.target.value;
							await sortRobloxServers();
							await renderServerRegions();
						};
						controlsContainer.appendChild(sortDropdown);
						const closeModal = () => {
							const overlay = document.getElementById('roregion-server-list-overlay');
							if (overlay) {
								overlay.style.opacity = '0';
								overlay.querySelector('#roregion-server-list-content').style.transform = 'scale(0.95)';
								setTimeout(() => {
									overlay.remove();
									body.style.overflow = originalBodyOverflow;
									const listArea = document.getElementById('roregion-server-list-content-area');
									if (listArea && serverListScrollHandlerRef) {
										listArea.removeEventListener('scroll', serverListScrollHandlerRef);
										serverListScrollHandlerRef = null;
									}
								}, 200);
							}
						};
						const closeButton = document.createElement('button');
						closeButton.id = 'roregion-overlay-close-button';
						closeButton.textContent = closeButton_Translated;
						closeButton.style.cssText = `
                            padding: 6px 15px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600;
                            background-color: ${isDarkMode ? '#444' : '#ddd'}; border: 1px solid ${isDarkMode ? '#666' : '#bbb'};
                            color: ${isDarkMode ? 'white' : '#333'}; transition: background-color 0.2s ease, border-color 0.2s ease;
                        `;
						closeButton.onclick = closeModal;
						controlsContainer.appendChild(closeButton);
						headerContainer.appendChild(controlsContainer);
						modalContent.appendChild(headerContainer);
						const serverListArea = document.createElement('div');
						serverListArea.id = 'roregion-server-list-content-area';
						serverListArea.style.cssText = `flex-grow: 1; overflow-y: auto; padding: 10px 20px;`;
						const serverList = document.createElement('div');
						serverList.id = 'roregion-actual-server-list';
						serverList.style.cssText = `display: flex; flex-direction: column; gap: 15px; padding-bottom: 10px;`;
						serverList.innerHTML = `<p style="text-align:center; padding: 40px 0; font-weight:bold; color:${isDarkMode ? '#aaa' : '#666'};">Filtering servers...</p>`;
						serverListArea.appendChild(serverList);
						modalContent.appendChild(serverListArea);
						const reviewContainer = document.createElement('div');
						reviewContainer.id = 'roregion-review-container';
						reviewContainer.style.cssText = `
                        padding: 15px 20px;
                        border-top: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
                        background-color: ${isDarkMode ? 'rgb(35, 35, 38)' : '#f8f8f8'};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    `;
						const reviewContent = document.createElement('div');
						reviewContent.style.cssText = `
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 15px;
                        width: 100%;
                        max-width: 700px;
                    `;
						const starContainer = document.createElement('div');
						starContainer.style.cssText = `
                        display: flex;
                        gap: 8px;
                    `;
						for (let i = 1; i <= 5; i++) {
							const star = document.createElement('div');
							star.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="roregion-review-star" data-rating="${i}">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        `;
							star.style.cssText = `
                            cursor: pointer;
                            color: ${isDarkMode ? '#555' : '#ccc'};
                            transition: color 0.2s ease, transform 0.2s ease;
                        `;
							star.onmouseover = () => {
								const stars = reviewContainer.querySelectorAll('.roregion-review-star');
								stars.forEach(s => {
									if (parseInt(s.getAttribute('data-rating')) <= i) {
										s.style.color = '#ffac33';
										s.style.transform = 'scale(1.1)';
									}
								});
							};
							star.onmouseout = () => {
								const stars = reviewContainer.querySelectorAll('.roregion-review-star');
								stars.forEach(s => {
									s.style.color = isDarkMode ? '#555' : '#ccc';
									s.style.transform = 'scale(1)';
								});
							};
							star.onclick = () => {
								openReviewDialog(i);
							};
							starContainer.appendChild(star);
						}
						const reviewText = document.createElement('div');
						reviewText.style.cssText = `
                        font-size: 15px;
                        font-weight: 600;
                        color: ${isDarkMode ? '#ddd' : '#444'};
                    `;
						reviewText.textContent = giveUsAReview_Translated.replace('', '')
						reviewContent.appendChild(reviewText);
						reviewContent.appendChild(starContainer);
						reviewContainer.appendChild(reviewContent);
						modalContent.appendChild(reviewContainer);
						modalOverlay.appendChild(modalContent);
						document.body.appendChild(modalOverlay);
						await delay(10);
						modalOverlay.style.opacity = '1';
						modalContent.style.transform = 'scale(1)';
						if (!regionSpecificServers[region] || regionSpecificServers[region].length === 0) {
							const focusButton = document.createElement('button');
							focusButton.id = 'focus-region-button';
							focusButton.textContent = focusOnRegion_Translated;
							focusButton.style.cssText = `
                            padding: 6px 15px; border-radius: 6px; cursor: pointer; 
                            font-size: 14px; font-weight: 600;
                            background-color: ${isDarkMode ? '#2a8c3a' : '#2a8c3a'}; 
                            border: none;
                            color: white; 
                            transition: background-color 0.2s ease;
                        `;
							focusButton.onclick = async () => {
								focusButton.disabled = true;
								focusButton.textContent = loading_Translated;
								focusButton.style.opacity = '0.6';
								await getServerInfo(placeId, null, [region], true, null, region);
								let serversInRegion = regionSpecificServers[region] || [];
								if (serversInRegion.length === 0) {
									serversInRegion = allRobloxServers.filter(server => robloxServerPlaces[server.id]?.c === region);
								}
								serverListState.servers = serversInRegion;
								await sortRobloxServers();
								await renderServerRegions();
								focusButton.disabled = false;
								focusButton.textContent = focusOnRegion_Translated;
								focusButton.style.opacity = '1';
							};
						}
						let serversInRegion = regionSpecificServers[region] || allRobloxServers.filter(server => robloxServerPlaces[server.id]?.c === region);
						if (serversInRegion.length === 0) {
							serverList.innerHTML = `<p style="text-align:center; padding: 40px 0; font-weight:bold; color:${isDarkMode ? '#aaa' : '#666'};">No servers found in this region. Try refreshing.</p>`;
						} else {
							serverListState.servers = serversInRegion;
							await sortRobloxServers();
							serverListState.viewportHeight = window.innerHeight * 0.7;
							setupRenderingServers(serverListArea, serverList);
							await renderServerRegions();
						}
						modalOverlay.onclick = (event) => {
							if (event.target === modalOverlay) closeModal();
						};

						function openReviewDialog(rating) {
							const reviewUrl = `https://chromewebstore.google.com/detail/kholpglpladobppelhcjjjlckjplkgan/reviews`;
							window.open(reviewUrl, '_blank');
						}
					} catch (error) {
						modalOverlay?.remove();
						body.style.overflow = originalBodyOverflow;
						const listArea = document.getElementById('roregion-server-list-content-area');
						if (listArea && serverListScrollHandlerRef) {
							listArea.removeEventListener('scroll', serverListScrollHandlerRef);
						}
					} finally {
						isFetchingServersForRegion[region] = false;
					}
				}
				function setupRenderingServers() {
					return;
				}
				async function renderServerRegions() {
					const listElement = document.getElementById('roregion-actual-server-list');
					if (!listElement) return;
					const isDarkMode = currentTheme === 'dark';
					listElement.innerHTML = '';
					serverListState.visibleServerCount = 0;
					serverListState.renderedServerIds.clear();
					serverListState.loading = false;
					if (serverListState.servers.length === 0) {
						listElement.innerHTML = `<p style="text-align:center; padding: 40px 0; font-weight:bold; color:${isDarkMode ? '#aaa' : '#666'};">No active servers found in this region.</p>`;
						return;
					}
					const loadingPlaceholder = document.createElement('div');
					loadingPlaceholder.style.cssText = `
                    text-align: center;
                    padding: 20px;
                    color: ${isDarkMode ? '#aaa' : '#666'};
                `;
					loadingPlaceholder.textContent = loadingServers_Translated;
					listElement.appendChild(loadingPlaceholder);
					setTimeout(async () => {
						try {
							const initialServers = serverListState.servers.slice(0, BATCH_SIZE);
							const allTokens = initialServers.flatMap(server => server.playerTokens || []);
							const uniqueTokens = [...new Set(allTokens)].filter(token => token);
							const tokenBatches = [];
							for (let i = 0; i < uniqueTokens.length; i += THUMBNAIL_BATCH_SIZE) {
								tokenBatches.push(uniqueTokens.slice(i, i + THUMBNAIL_BATCH_SIZE));
							}
							const thumbnailPromises = tokenBatches.map(batch => fetchThumbnailAssets(batch));
							const thumbnailResults = await Promise.all(thumbnailPromises);
							const thumbnailUrls = thumbnailResults.reduce((acc, result) => ({
								...acc,
								...result
							}), {});
							Object.entries(thumbnailUrls).forEach(([token, url]) => {
								thumbnailCache.set(token, url);
							});
							const fragment = document.createDocumentFragment();
							const serverEntries = [];
							for (const server of initialServers) {
								const serverId = server.id;
								if (serverListState.renderedServerIds.has(serverId)) continue;
								let serverEntry = serverEntryCache.get(serverId);
								if (!serverEntry) {
									serverEntry = createServerFetch(server, thumbnailUrls, isDarkMode);
									serverEntryCache.set(serverId, serverEntry);
								}
								serverEntries.push(serverEntry);
								serverListState.renderedServerIds.add(serverId);
							}
							serverEntries.forEach(entry => fragment.appendChild(entry));
							listElement.innerHTML = '';
							listElement.appendChild(fragment);
							serverListState.visibleServerCount = initialServers.length;
							if (serverListState.servers.length > BATCH_SIZE) {
								loadButtonMore(listElement, isDarkMode);
							}
						} catch (error) {
							console.error('Error loading initial servers:', error);
							loadingPlaceholder.textContent = errorLoadingServers_Translated;
						}
					}, 0);
				}
				function loadButtonMore(listElement, isDarkMode) {
					const loadMoreButton = document.createElement('button');
					loadMoreButton.textContent = loadMoreServers_Translated;
					loadMoreButton.style.cssText = `
                    margin: 15px auto;
                    padding: 8px 16px;
                    background-color: ${isDarkMode ? '#3975e0' : '#3975e0'};
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    display: block;
                    transition: opacity 0.2s ease;
                `;
					let isLoading = false;
					loadMoreButton.onclick = async () => {
						if (isLoading) return;
						isLoading = true;
						loadMoreButton.style.opacity = '0.7';
						loadMoreButton.textContent = loading_Translated;
						try {
							const nextBatch = serverListState.servers.slice(serverListState.visibleServerCount, serverListState.visibleServerCount + BATCH_SIZE);
							if (nextBatch.length > 0) {
								const nextTokens = nextBatch.flatMap(server => server.playerTokens || []);
								const uniqueTokens = [...new Set(nextTokens)].filter(token => token);
								const uncachedTokens = uniqueTokens.filter(token => !thumbnailCache.has(token));
								let nextThumbnailUrls = {};
								if (uncachedTokens.length > 0) {
									const tokenBatches = [];
									for (let i = 0; i < uncachedTokens.length; i += THUMBNAIL_BATCH_SIZE) {
										tokenBatches.push(uncachedTokens.slice(i, i + THUMBNAIL_BATCH_SIZE));
									}
									const thumbnailPromises = tokenBatches.map(batch => fetchThumbnailAssets(batch));
									const thumbnailResults = await Promise.all(thumbnailPromises);
									nextThumbnailUrls = thumbnailResults.reduce((acc, result) => ({
										...acc,
										...result
									}), {});
									Object.entries(nextThumbnailUrls).forEach(([token, url]) => {
										thumbnailCache.set(token, url);
									});
								}
								const nextFragment = document.createDocumentFragment();
								const serverEntries = [];
								for (const server of nextBatch) {
									const serverId = server.id;
									if (serverListState.renderedServerIds.has(serverId)) continue;
									let serverEntry = serverEntryCache.get(serverId);
									if (!serverEntry) {
										serverEntry = createServerFetch(server, {
											...thumbnailCache,
											...nextThumbnailUrls
										}, isDarkMode);
										serverEntryCache.set(serverId, serverEntry);
									}
									serverEntries.push(serverEntry);
									serverListState.renderedServerIds.add(serverId);
								}
								serverEntries.forEach(entry => nextFragment.appendChild(entry));
								listElement.insertBefore(nextFragment, loadMoreButton);
								serverListState.visibleServerCount += nextBatch.length;
								if (serverListState.visibleServerCount >= serverListState.servers.length) {
									loadMoreButton.remove();
								}
							}
						} catch (error) {
							console.error('Error loading more servers:', error);
							loadMoreButton.textContent = errorLoadingMore_Translated;
						} finally {
							isLoading = false;
							loadMoreButton.style.opacity = '1';
							loadMoreButton.textContent = loadMoreServers_Translated;
						}
					};
					listElement.appendChild(loadMoreButton);
				}
				const style = document.createElement('style');
				style.textContent = `
                .server-entry {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    padding: 15px 20px;
                    margin-bottom: 15px;
                    border-radius: 8px;
                }

                .server-entry.dark {
                    background-color: rgb(45, 48, 53);
                    color: #e0e0e0;
                }

                .server-entry.light {
                    background-color: #ffffff;
                    color: #333333;
                }

                .profile-pictures-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    min-height: 40px;
                    align-items: center;
                }

                .profile-thumbnail {
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;
                    object-fit: cover;
                    vertical-align: middle;
                    background-color: #555;
                }

                .plus-count {
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 600;
                }

                .plus-count.dark {
                    background-color: rgba(255, 255, 255, 0.15);
                    color: #b0b0b0;
                }

                .plus-count.light {
                    background-color: rgba(0, 0, 0, 0.08);
                    color: #555;
                }

                .info-section {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .player-count-text {
                    font-size: 16px;
                    font-weight: 600;
                }

                .player-count-text.dark {
                    color: #d0d0d0;
                }

                .player-count-text.light {
                    color: #444;
                }

                .ping-container {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 15px;
                    vertical-align: middle;
                }

                .bottom-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    margin-top: 5px;
                }

                .buttons-container {
                    display: flex;
                    gap: 8px;
                }

                .server-button {
                    border-radius: 6px;
                    padding: 8px 18px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                }

                .join-button {
                    background-color: #3975e0;
                    color: white;
                    border: none;
                }

                .join-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .join-button:disabled.dark {
                    background-color: #555;
                }

                .join-button:disabled.light {
                    background-color: #ccc;
                }

                .share-button {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: #c0c0c0;
                    border: none;
                }

                .share-button.light {
                    background-color: rgba(0, 0, 0, 0.06);
                    color: #444;
                }

                .server-id-display {
                    text-align: right;
                    font-size: 3px;
                    font-weight: 500;
                    font-family: monospace;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .server-id-display.dark {
                    color: #888;
                }

                .server-id-display.light {
                    color: #777;
                }
            `;
				document.head.appendChild(style);
				function createServerFetch(server, thumbnailUrls, isDarkMode) {
					const serverId = server.id;
					const serverEntry = document.createElement('div');
					serverEntry.className = `server-entry ${isDarkMode ? 'dark' : 'light'}`;
					serverEntry.dataset.serverId = serverId;
					const profilePicturesRow = document.createElement('div');
					profilePicturesRow.className = 'profile-pictures-row';
					const playerTokens = server.playerTokens || [];
					const maxThumbnails = 5;
					const playersToShow = Math.min(server.playing || 0, playerTokens.length, maxThumbnails);
					for (let i = 0; i < playersToShow; i++) {
						const token = playerTokens[i];
						if (!token) continue;
						const profileImg = document.createElement('img');
						profileImg.className = 'profile-thumbnail';
						profileImg.src = thumbnailUrls[token] || `https://tr.rbxcdn.com/53eb9b17fe1432a809c73a13889b5006/150/150/Image/Png`;
						profileImg.alt = `Player ${i+1}`;
						profileImg.title = `Player ${i+1}`;
						profilePicturesRow.appendChild(profileImg);
					}
					if (server.playing > maxThumbnails) {
						const plusCount = document.createElement('div');
						plusCount.className = `plus-count ${isDarkMode ? 'dark' : 'light'}`;
						plusCount.textContent = `+${server.playing - maxThumbnails}`;
						plusCount.title = `${server.playing - maxThumbnails} more players`;
						profilePicturesRow.appendChild(plusCount);
					} else if (server.playing === 0 && playerTokens.length === 0) {
						const noPlayersText = document.createElement('div');
						noPlayersText.textContent = noPlayersOnline_Translated;
						noPlayersText.style.cssText = `
                        font-size: 14px;
                        color: ${isDarkMode ? '#888' : '#777'};
                        font-style: italic;
                        padding: 8px 0;
                        line-height: 60px;
                    `;
						profilePicturesRow.appendChild(noPlayersText);
					}
					serverEntry.appendChild(profilePicturesRow);
					const infoSection = document.createElement('div');
					infoSection.className = 'info-section';
					const playerCountText = document.createElement('div');
					playerCountText.className = `player-count-text ${isDarkMode ? 'dark' : 'light'}`;
					playerCountText.innerHTML = playerCount_Translated.replace('PLAYING_COUNT', server.playing || 0).replace('MAX_PLAYERS', server.maxPlayers || '?');
					const pingContainer = document.createElement('div');
					pingContainer.className = 'ping-container';
					let pingValue = server.calculatedPing;
					let pingDisplay = "Ping: ?";
					let pingColor = isDarkMode ? '#aaa' : '#666';
					if (pingValue !== undefined && !isNaN(pingValue) && pingValue !== Infinity) {
						pingDisplay = `Ping: ${Math.round(pingValue)}ms`;
						if (pingValue < 80) pingColor = isDarkMode ? '#77cc77' : '#28a745';
						else if (pingValue < 150) pingColor = isDarkMode ? '#dddd77' : '#ffc107';
						else pingColor = isDarkMode ? '#ff8888' : '#dc3545';
					}
					const pingText = document.createElement('span');
					pingText.textContent = pingDisplay;
					pingText.style.color = pingColor;
					pingContainer.appendChild(pingText);
					infoSection.appendChild(playerCountText);
					infoSection.appendChild(pingContainer);
					serverEntry.appendChild(infoSection);
					const bottomRow = document.createElement('div');
					bottomRow.className = 'bottom-row';
					const buttonsContainer = document.createElement('div');
					buttonsContainer.className = 'buttons-container';
					const joinButton = document.createElement('button');
					joinButton.textContent = joinButton_Translated;
					joinButton.className = `server-button join-button light`;
					joinButton.disabled = server.playing >= server.maxPlayers;
					if (!joinButton.disabled) {
						joinButton.onclick = () => {
							joinSpecificServer(serverId);
							const overlay = document.getElementById('roregion-server-list-overlay');
							if (overlay) {
								const actualCloseButton = overlay.querySelector('#roregion-overlay-close-button');
								if (actualCloseButton) {
									actualCloseButton.click();
								} else {
									overlay.remove();
									document.body.style.overflow = "auto";
								}
							}
						};
					}
					const shareButton = document.createElement('button');
					shareButton.textContent = shareButton_Translated;
					shareButton.className = `server-button share-button`;
					shareButton.style.backgroundColor = "#c9c9c9ff";
					shareButton.style.color = "black";
					shareButton.onclick = () => {
						function extractLanguageCode(languageCode) {
 							return languageCode.split('_')[0];
						}			

						const langCodeShare = extractLanguageCode(languageCode)
						const link = `https://roregion.com/${langCodeShare}/?placeId=${placeId}&gameInstanceId=${serverId}`;

						navigator.clipboard.writeText(link).then(() => {
							shareButton.textContent = copied_Translated;
							setTimeout(() => {
								shareButton.textContent = shareButton_Translated;
								shareButton.className = `server-button share-button`;
							}, 1500);
						}).catch(err => {
							shareButton.textContent = error_Translated;
							shareButton.style.backgroundColor = isDarkMode ? '#a55' : '#fcc';
							shareButton.style.borderColor = isDarkMode ? '#b66' : '#ebb';
							shareButton.style.color = isDarkMode ? 'white' : '#411';
							setTimeout(() => {
								shareButton.textContent = shareButton_Translated;
								shareButton.className = `server-button share-button`;
							}, 1500);
						});
					};
					buttonsContainer.append(joinButton, shareButton);
					const serverIdDisplay = document.createElement('div');
					serverIdDisplay.className = `server-id-display ${isDarkMode ? 'dark' : 'light'}`;
					serverIdDisplay.textContent = `ID: ${serverId}`;
					serverIdDisplay.title = serverId;
					bottomRow.append(buttonsContainer, serverIdDisplay);
					serverEntry.appendChild(bottomRow);
					return serverEntry;
				}
				async function sortRobloxServers() {
						const sortValue = serverListState.currentSort;
						await Promise.all(serverListState.servers.map(async server => {
							if (server.calculatedPing === undefined || isNaN(server.calculatedPing) || server.calculatedPing === Infinity) {
								const serverLoc = robloxServerPlaces[server.id]?.l;
								if (robloxProfileUserLocation && serverLoc && typeof serverLoc.latitude === 'number') {
									const dist = calculateDistance(robloxProfileUserLocation.latitude, robloxProfileUserLocation.longitude, serverLoc.latitude, serverLoc.longitude);
									if (!isNaN(dist)) {
										server.calculatedPing = Math.round(dist * 0.05);
									} else {
										server.calculatedPing = Infinity;
									}
								} else {
									server.calculatedPing = Infinity;
								}
							}
						}));
						serverListState.servers.sort((a, b) => {
							const pingA = a.calculatedPing ?? Infinity,
								pingB = b.calculatedPing ?? Infinity;
							const playersA = a.playing ?? -1,
								playersB = b.playing ?? -1;
							const maxA = a.maxPlayers || Infinity,
								maxB = b.maxPlayers || Infinity;
							const isFullA = playersA >= maxA,
								isFullB = playersB >= maxB;
							switch (sortValue) {
								case 'ping_lowest':
									return pingA - pingB || playersB - playersA;
								case 'players_highest':
									return (isFullA === isFullB ? 0 : isFullA ? 1 : -1) || playersB - playersA || pingA - pingB;
								case 'players_lowest':
									return (isFullA - isFullB) || playersA - playersB || pingA - pingB;
								default:
									return 0;
							}
						});
					}
					(async () => {
						await applyTheme();
						await updateRegionSelectorState();
						if (!regionSelectorEnabled) {
							return;
						}
						if (!placeId) {
							return;
						}
						let waitCount = 0;
						while (serverIpMap === null && waitCount < 25) {
							await delay(200);
							waitCount++;
						}
						if (serverIpMap === null) {
							serverIpMap = {};
						} else {}
						await updateDetailsServers();
						await getServerInfo(placeId, null, defaultRegions, true);
					})();
			}
		} else {}
	});
}
regionSelectorInitiate()