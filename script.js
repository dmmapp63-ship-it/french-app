const words = [
  { fr: "Bonjour", vi: "Xin chào", topic: "Chào hỏi" },
  { fr: "Salut", vi: "Chào", topic: "Chào hỏi" },
  { fr: "Comment ça va ?", vi: "Bạn khỏe không?", topic: "Chào hỏi" },
  { fr: "Merci", vi: "Cảm ơn", topic: "Chào hỏi" },
  { fr: "Au revoir", vi: "Tạm biệt", topic: "Chào hỏi" },
  { fr: "À bientôt", vi: "Hẹn gặp lại", topic: "Chào hỏi" },
  { fr: "Bonne journée", vi: "Chúc một ngày tốt lành", topic: "Chào hỏi" },
  { fr: "Bonsoir", vi: "Chào buổi tối", topic: "Chào hỏi" },
  { fr: "Bonne nuit", vi: "Chúc ngủ ngon", topic: "Chào hỏi" },
  { fr: "De rien", vi: "Không có gì", topic: "Chào hỏi" },
  { fr: "Madame", vi: "Bà", topic: "Chào hỏi" },
  { fr: "Monsieur", vi: "Ông", topic: "Chào hỏi" },
  { fr: "Mademoiselle", vi: "Cô gái", topic: "Chào hỏi" },
  { fr: "Bienvenue", vi: "Chào mừng", topic: "Chào hỏi" },
  { fr: "Bon appétit", vi: "Chúc ngon miệng", topic: "Chào hỏi" },
  { fr: "Santé", vi: "Sức khỏe", topic: "Chào hỏi" },
  { fr: "Excusez-moi", vi: "Xin lỗi", topic: "Chào hỏi" },
  { fr: "S'il vous plaît", vi: "Xin vui lòng", topic: "Hỏi đường" },
  { fr: "Où est la gare?", vi: "Nhà ga ở đâu?", topic: "Hỏi đường" },
  { fr: "Où est...?", vi: "Ở đâu...?", topic: "Hỏi đường" },
  { fr: "Je ne comprends pas.", vi: "Tôi không hiểu.", topic: "Hỏi đường" },
  { fr: "Où est l'hôtel?", vi: "Khách sạn ở đâu?", topic: "Hỏi đường" },
  { fr: "Tout droit", vi: "Thẳng", topic: "Hỏi đường" },
  { fr: "À gauche", vi: "Bên trái", topic: "Hỏi đường" },
  { fr: "À droite", vi: "Bên phải", topic: "Hỏi đường" },
  { fr: "Près de", vi: "Gần", topic: "Hỏi đường" },
  { fr: "Loin de", vi: "Xa", topic: "Hỏi đường" },
  { fr: "Devant", vi: "Phía trước", topic: "Hỏi đường" },
  { fr: "Derrière", vi: "Phía sau", topic: "Hỏi đường" },
  { fr: "En face de", vi: "Đối diện", topic: "Hỏi đường" },
  { fr: "À côté de", vi: "Bên cạnh", topic: "Hỏi đường" },
  { fr: "Entre", vi: "Giữa", topic: "Hỏi đường" },
  { fr: "Sous", vi: "Dưới", topic: "Hỏi đường" },
  { fr: "Sur", vi: "Trên", topic: "Hỏi đường" },
  { fr: "Dans", vi: "Trong", topic: "Hỏi đường" },
  { fr: "Hors de", vi: "Ngoài", topic: "Hỏi đường" },
  { fr: "Je m'appelle...", vi: "Tôi tên là...", topic: "Giới thiệu" },
  { fr: "Enchanté(e)", vi: "Rất vui được gặp", topic: "Giới thiệu" },
  { fr: "Parlez-vous français ?", vi: "Bạn có nói tiếng Pháp không?", topic: "Giới thiệu" },
  { fr: "Quel est votre nom?", vi: "Tên bạn là gì?", topic: "Giới thiệu" },
  { fr: "D'où venez-vous?", vi: "Bạn đến từ đâu?", topic: "Giới thiệu" },
  { fr: "Je suis vietnamien", vi: "Tôi là người Việt Nam", topic: "Giới thiệu" },
  { fr: "Quel âge avez-vous?", vi: "Bạn bao nhiêu tuổi?", topic: "Giới thiệu" },
  { fr: "Je suis marié", vi: "Tôi đã kết hôn", topic: "Giới thiệu" },
  { fr: "Je suis célibataire", vi: "Tôi độc thân", topic: "Giới thiệu" },
  { fr: "Profession", vi: "Nghề nghiệp", topic: "Giới thiệu" },
  { fr: "Ingénieur", vi: "Kỹ sư", topic: "Giới thiệu" },
  { fr: "Docteur", vi: "Bác sĩ", topic: "Giới thiệu" },
  { fr: "Avocat", vi: "Luật sư", topic: "Giới thiệu" },
  { fr: "Professeur", vi: "Giáo sư", topic: "Giới thiệu" },
  { fr: "Infirmier", vi: "Y tá", topic: "Giới thiệu" },
  { fr: "Coiffeur", vi: "Thợ cắt tóc", topic: "Giới thiệu" },
  { fr: "Cuisinier", vi: "Đầu bếp", topic: "Giới thiệu" },
  { fr: "Vendeur", vi: "Người bán hàng", topic: "Giới thiệu" },
  { fr: "Employé", vi: "Nhân viên", topic: "Giới thiệu" },
  { fr: "J'aime", vi: "Tôi thích", topic: "Giới thiệu" },
  { fr: "Je n'aime pas", vi: "Tôi không thích", topic: "Giới thiệu" },
  { fr: "Je voudrais...", vi: "Tôi muốn...", topic: "Mua sắm" },
  { fr: "Combien ça coûte?", vi: "Bao nhiêu tiền?", topic: "Mua sắm" },
  { fr: "C'est trop cher", vi: "Nó quá đắt", topic: "Mua sắm" },
  { fr: "C'est bon marché", vi: "Nó rẻ", topic: "Mua sắm" },
  { fr: "Avez-vous...?", vi: "Bạn có...?", topic: "Mua sắm" },
  { fr: "Je prends", vi: "Tôi lấy", topic: "Mua sắm" },
  { fr: "Payez ici", vi: "Thanh toán ở đây", topic: "Mua sắm" },
  { fr: "Carte de crédit", vi: "Thẻ tín dụng", topic: "Mua sắm" },
  { fr: "Argent", vi: "Tiền", topic: "Mua sắm" },
  { fr: "Prix", vi: "Giá cả", topic: "Mua sắm" },
  { fr: "Remise", vi: "Chiết khấu", topic: "Mua sắm" },
  { fr: "Soldes", vi: "Bán hạ giá", topic: "Mua sắm" },
  { fr: "Vêtements", vi: "Quần áo", topic: "Mua sắm" },
  { fr: "Chaussures", vi: "Giày", topic: "Mua sắm" },
  { fr: "Chemise", vi: "Áo sơ mi", topic: "Mua sắm" },
  { fr: "Pantalon", vi: "Quần", topic: "Mua sắm" },
  { fr: "Jupe", vi: "Váy", topic: "Mua sắm" },
  { fr: "Robe", vi: "Đầm", topic: "Mua sắm" },
  { fr: "Manteau", vi: "Áo khoác", topic: "Mua sắm" },
  { fr: "Chapeau", vi: "Mũ", topic: "Mua sắm" },
  { fr: "Gants", vi: "Găng tay", topic: "Mua sắm" },
  { fr: "Écharpe", vi: "Khăn quàng", topic: "Mua sắm" },
  { fr: "Ceinture", vi: "Đai thắt lưng", topic: "Mua sắm" },
  { fr: "Cravate", vi: "Cà vạt", topic: "Mua sắm" },
  { fr: "Montre", vi: "Đồng hồ", topic: "Mua sắm" },
  { fr: "Bague", vi: "Nhẫn", topic: "Mua sắm" },
  { fr: "Collier", vi: "Dây chuyền", topic: "Mua sắm" },
  { fr: "Je voudrais une table pour deux", vi: "Tôi muốn một bàn cho hai người", topic: "Ăn uống" },
  { fr: "L'addition, s'il vous plaît", vi: "Thanh toán, xin vui lòng", topic: "Ăn uống" },
  { fr: "C'est délicieux", vi: "Ngon quá", topic: "Ăn uống" },
  { fr: "L'eau, s'il vous plaît", vi: "Nước, xin vui lòng", topic: "Ăn uống" },
  { fr: "Du vin rouge", vi: "Rượu vang đỏ", topic: "Ăn uống" },
  { fr: "Un café", vi: "Một cà phê", topic: "Ăn uống" },
  { fr: "Un thé", vi: "Một trà", topic: "Ăn uống" },
  { fr: "Un verre d'eau", vi: "Một ly nước", topic: "Ăn uống" },
  { fr: "Un déjeuner", vi: "Một bữa trưa", topic: "Ăn uống" },
  { fr: "Le dîner", vi: "Bữa tối", topic: "Ăn uống" },
  { fr: "Petit déjeuner", vi: "Bữa sáng", topic: "Ăn uống" },
  { fr: "Pain", vi: "Bánh mì", topic: "Ăn uống" },
  { fr: "Beurre", vi: "Bơ", topic: "Ăn uống" },
  { fr: "Fromage", vi: "Phô mai", topic: "Ăn uống" },
  { fr: "Lait", vi: "Sữa", topic: "Ăn uống" },
  { fr: "Œuf", vi: "Trứng", topic: "Ăn uống" },
  { fr: "Jambon", vi: "Giăm bông", topic: "Ăn uống" },
  { fr: "Poulet", vi: "Gà", topic: "Ăn uống" },
  { fr: "Bœuf", vi: "Thịt bò", topic: "Ăn uống" },
  { fr: "Poisson", vi: "Cá", topic: "Ăn uống" },
  { fr: "Soupe", vi: "Súp", topic: "Ăn uống" },
  { fr: "Salade", vi: "Salad", topic: "Ăn uống" },
  { fr: "Riz", vi: "Cơm", topic: "Ăn uống" },
  { fr: "Pâtes", vi: "Mỳ Ý", topic: "Ăn uống" },
  { fr: "Pomme de terre", vi: "Khoai tây", topic: "Ăn uống" },
  { fr: "Légume", vi: "Rau", topic: "Ăn uống" },
  { fr: "Tomate", vi: "Cà chua", topic: "Ăn uống" },
  { fr: "Carotte", vi: "Cà rốt", topic: "Ăn uống" },
  { fr: "Oignon", vi: "Hành", topic: "Ăn uống" },
  { fr: "Ail", vi: "Tỏi", topic: "Ăn uống" },
  { fr: "Fruit", vi: "Trái cây", topic: "Ăn uống" },
  { fr: "Pomme", vi: "Táo", topic: "Ăn uống" },
  { fr: "Banane", vi: "Chuối", topic: "Ăn uống" },
  { fr: "Orange", vi: "Cam", topic: "Ăn uống" },
  { fr: "Citron", vi: "Chanh", topic: "Ăn uống" },
  { fr: "Raisin", vi: "Nho", topic: "Ăn uống" },
  { fr: "Fraise", vi: "Dâu tây", topic: "Ăn uống" },
  { fr: "Pastèque", vi: "Dưa hấu", topic: "Ăn uống" },
  { fr: "Dessert", vi: "Món tráng miệng", topic: "Ăn uống" },
  { fr: "Gâteau", vi: "Bánh ngọt", topic: "Ăn uống" },
  { fr: "Crème glacée", vi: "Kem", topic: "Ăn uống" },
  { fr: "Chocolat", vi: "Sô cô la", topic: "Ăn uống" },
  { fr: "Vin blanc", vi: "Rượu vang trắng", topic: "Ăn uống" },
  { fr: "Bière", vi: "Bia", topic: "Ăn uống" },
  { fr: "Jus", vi: "Nước trái cây", topic: "Ăn uống" },
  { fr: "Soda", vi: "Nước ngọt", topic: "Ăn uống" },
  { fr: "Piment", vi: "Ớt", topic: "Ăn uống" },
  { fr: "Sel", vi: "Muối", topic: "Ăn uống" },
  { fr: "Sucre", vi: "Đường", topic: "Ăn uống" },
  { fr: "Miel", vi: "Mật ong", topic: "Ăn uống" },
  { fr: "J'ai une réservation", vi: "Tôi đã đặt chỗ", topic: "Du lịch" },
  { fr: "Je voudrais un billet aller-retour", vi: "Tôi muốn một vé khứ hồi", topic: "Du lịch" },
  { fr: "À quelle heure?", vi: "Mấy giờ?", topic: "Du lịch" },
  { fr: "L'aéroport", vi: "Sân bay", topic: "Du lịch" },
  { fr: "La gare", vi: "Nhà ga", topic: "Du lịch" },
  { fr: "L'hôtel", vi: "Khách sạn", topic: "Du lịch" },
  { fr: "Un musée", vi: "Một bảo tàng", topic: "Du lịch" },
  { fr: "Une chambre", vi: "Một phòng", topic: "Du lịch" },
  { fr: "Une chambre double", vi: "Một phòng đôi", topic: "Du lịch" },
  { fr: "Une chambre simple", vi: "Một phòng đơn", topic: "Du lịch" },
  { fr: "Bagages", vi: "Hành lý", topic: "Du lịch" },
  { fr: "Passeport", vi: "Hộ chiếu", topic: "Du lịch" },
  { fr: "Visa", vi: "Thị thực", topic: "Du lịch" },
  { fr: "Migration", vi: "Nhập cư", topic: "Du lịch" },
  { fr: "Taxi", vi: "Taxi", topic: "Du lịch" },
  { fr: "Autobus", vi: "Xe buýt", topic: "Du lịch" },
  { fr: "Train", vi: "Tàu hỏa", topic: "Du lịch" },
  { fr: "Avion", vi: "Máy bay", topic: "Du lịch" },
  { fr: "Bateau", vi: "Tàu", topic: "Du lịch" },
  { fr: "Voiture", vi: "Ô tô", topic: "Du lịch" },
  { fr: "Métro", vi: "Tàu điện ngầm", topic: "Du lịch" },
  { fr: "Vélo", vi: "Xe đạp", topic: "Du lịch" },
  { fr: "Moto", vi: "Xe máy", topic: "Du lịch" },
  { fr: "Station", vi: "Ga", topic: "Du lịch" },
  { fr: "Quai", vi: "Sân ga", topic: "Du lịch" },
  { fr: "Plateforme", vi: "Nền tảng", topic: "Du lịch" },
  { fr: "Billets", vi: "Vé", topic: "Du lịch" },
  { fr: "Réservation", vi: "Đặt chỗ", topic: "Du lịch" },
  { fr: "Guide touristique", vi: "Hướng dẫn du lịch", topic: "Du lịch" },
  { fr: "Carte", vi: "Bản đồ", topic: "Du lịch" },
  { fr: "Itinéraire", vi: "Lịch trình", topic: "Du lịch" },
  { fr: "Destination", vi: "Điểm đến", topic: "Du lịch" },
  { fr: "Vacances", vi: "Kỳ nghỉ", topic: "Du lịch" },
  { fr: "Plage", vi: "Bãi biển", topic: "Du lịch" },
  { fr: "Montagne", vi: "Núi", topic: "Du lịch" },
  { fr: "Forêt", vi: "Rừng", topic: "Du lịch" },
  { fr: "Lac", vi: "Hồ", topic: "Du lịch" },
  { fr: "Fleuve", vi: "Sông", topic: "Du lịch" },
  { fr: "Cascade", vi: "Thác nước", topic: "Du lịch" },
  { fr: "Château", vi: "Lâu đài", topic: "Du lịch" },
  { fr: "Temple", vi: "Đền", topic: "Du lịch" },
  { fr: "Église", vi: "Nhà thờ", topic: "Du lịch" },
  { fr: "Pagode", vi: "Chùa", topic: "Du lịch" },
  { fr: "Cathédrale", vi: "Nhà thờ Chính tòa", topic: "Du lịch" },
  { fr: "Pouvez-vous m'aider ?", vi: "Bạn có thể giúp tôi không?", topic: "Giao tiếp" },
  { fr: "Je ne parle pas bien français", vi: "Tôi không nói giỏi tiếng Pháp", topic: "Giao tiếp" },
  { fr: "Pouvez-vous répéter ?", vi: "Bạn có thể nhắc lại không?", topic: "Giao tiếp" },
  { fr: "Parlez plus lentement", vi: "Nói chậm hơn", topic: "Giao tiếp" },
  { fr: "Je suis désolé", vi: "Tôi xin lỗi", topic: "Giao tiếp" },
  { fr: "Pas de problème", vi: "Không vấn đề gì", topic: "Giao tiếp" },
  { fr: "D'accord", vi: "Đồng ý", topic: "Giao tiếp" },
  { fr: "Oui", vi: "Vâng", topic: "Giao tiếp" },
  { fr: "Non", vi: "Không", topic: "Giao tiếp" },
  { fr: "Peut-être", vi: "Có lẽ", topic: "Giao tiếp" },
  { fr: "Comment?", vi: "Sao?", topic: "Giao tiếp" },
  { fr: "Pourquoi?", vi: "Tại sao?", topic: "Giao tiếp" },
  { fr: "Quand?", vi: "Khi nào?", topic: "Giao tiếp" },
  { fr: "Quoi?", vi: "Cái gì?", topic: "Giao tiếp" },
  { fr: "Qui?", vi: "Ai?", topic: "Giao tiếp" },
  { fr: "Lequel?", vi: "Cái nào?", topic: "Giao tiếp" },
  { fr: "Quel?", vi: "Cái gì?", topic: "Giao tiếp" },
  { fr: "Combien?", vi: "Bao nhiêu?", topic: "Giao tiếp" },
  { fr: "Combien de temps?", vi: "Bao lâu?", topic: "Giao tiếp" },
  { fr: "Quelle est votre opinion?", vi: "Ý kiến của bạn là gì?", topic: "Giao tiếp" },
  { fr: "Êtes-vous d'accord?", vi: "Bạn có đồng ý không?", topic: "Giao tiếp" },
  { fr: "Je suis d'accord", vi: "Tôi đồng ý", topic: "Giao tiếp" },
  { fr: "Je ne suis pas d'accord", vi: "Tôi không đồng ý", topic: "Giao tiếp" },
  { fr: "C'est bon", vi: "Tốt lắm", topic: "Giao tiếp" },
  { fr: "C'est mauvais", vi: "Tồi tệ", topic: "Giao tiếp" },
  { fr: "C'est facile", vi: "Dễ", topic: "Giao tiếp" },
  { fr: "C'est difficile", vi: "Khó", topic: "Giao tiếp" },
  { fr: "Aidez-moi", vi: "Giúp tôi", topic: "Giao tiếp" },
  { fr: "Merci beaucoup", vi: "Cảm ơn rất nhiều", topic: "Giao tiếp" },
  { fr: "Un", vi: "Một", topic: "Số" },
  { fr: "Deux", vi: "Hai", topic: "Số" },
  { fr: "Trois", vi: "Ba", topic: "Số" },
  { fr: "Quatre", vi: "Bốn", topic: "Số" },
  { fr: "Cinq", vi: "Năm", topic: "Số" },
  { fr: "Six", vi: "Sáu", topic: "Số" },
  { fr: "Sept", vi: "Bảy", topic: "Số" },
  { fr: "Huit", vi: "Tám", topic: "Số" },
  { fr: "Neuf", vi: "Chín", topic: "Số" },
  { fr: "Dix", vi: "Mười", topic: "Số" },
  { fr: "Onze", vi: "Mười một", topic: "Số" },
  { fr: "Douze", vi: "Mười hai", topic: "Số" },
  { fr: "Treize", vi: "Mười ba", topic: "Số" },
  { fr: "Quatorze", vi: "Mười bốn", topic: "Số" },
  { fr: "Quinze", vi: "Mười năm", topic: "Số" },
  { fr: "Seize", vi: "Mười sáu", topic: "Số" },
  { fr: "Dix-sept", vi: "Mười bảy", topic: "Số" },
  { fr: "Dix-huit", vi: "Mười tám", topic: "Số" },
  { fr: "Dix-neuf", vi: "Mười chín", topic: "Số" },
  { fr: "Vingt", vi: "Hai mươi", topic: "Số" },
  { fr: "Trente", vi: "Ba mươi", topic: "Số" },
  { fr: "Quarante", vi: "Bốn mươi", topic: "Số" },
  { fr: "Cinquante", vi: "Năm mươi", topic: "Số" },
  { fr: "Soixante", vi: "Sáu mươi", topic: "Số" },
  { fr: "Soixante-dix", vi: "Bảy mươi", topic: "Số" },
  { fr: "Quatre-vingts", vi: "Tám mươi", topic: "Số" },
  { fr: "Quatre-vingt-dix", vi: "Chín mươi", topic: "Số" },
  { fr: "Cent", vi: "Một trăm", topic: "Số" },
  { fr: "Mille", vi: "Một nghìn", topic: "Số" },
  { fr: "Million", vi: "Một triệu", topic: "Số" },
  { fr: "Zéro", vi: "Không", topic: "Số" },
  { fr: "Premier", vi: "Thứ nhất", topic: "Số" },
  { fr: "Deuxième", vi: "Thứ hai", topic: "Số" },
  { fr: "Troisième", vi: "Thứ ba", topic: "Số" },
  { fr: "Quatrième", vi: "Thứ tư", topic: "Số" },
  { fr: "Cinquième", vi: "Thứ năm", topic: "Số" },
  { fr: "Sixième", vi: "Thứ sáu", topic: "Số" },
  { fr: "Septième", vi: "Thứ bảy", topic: "Số" },
  { fr: "Huitième", vi: "Thứ tám", topic: "Số" },
  { fr: "Neuvième", vi: "Thứ chín", topic: "Số" },
  { fr: "Dixième", vi: "Thứ mười", topic: "Số" },
  { fr: "Une fois", vi: "Một lần", topic: "Số" },
  { fr: "Deux fois", vi: "Hai lần", topic: "Số" },
  { fr: "Trois fois", vi: "Ba lần", topic: "Số" },
  { fr: "Moitié", vi: "Nửa", topic: "Số" },
  { fr: "Entièrement", vi: "Toàn bộ", topic: "Số" },
  { fr: "Quart", vi: "Một phần tư", topic: "Số" },
  { fr: "Lundi", vi: "Thứ hai", topic: "Thời gian" },
  { fr: "Mardi", vi: "Thứ ba", topic: "Thời gian" },
  { fr: "Mercredi", vi: "Thứ tư", topic: "Thời gian" },
  { fr: "Jeudi", vi: "Thứ năm", topic: "Thời gian" },
  { fr: "Vendredi", vi: "Thứ sáu", topic: "Thời gian" },
  { fr: "Samedi", vi: "Thứ bảy", topic: "Thời gian" },
  { fr: "Dimanche", vi: "Chủ nhật", topic: "Thời gian" },
  { fr: "Janvier", vi: "Tháng 1", topic: "Thời gian" },
  { fr: "Février", vi: "Tháng 2", topic: "Thời gian" },
  { fr: "Mars", vi: "Tháng 3", topic: "Thời gian" },
  { fr: "Avril", vi: "Tháng 4", topic: "Thời gian" },
  { fr: "Mai", vi: "Tháng 5", topic: "Thời gian" },
  { fr: "Juin", vi: "Tháng 6", topic: "Thời gian" },
  { fr: "Juillet", vi: "Tháng 7", topic: "Thời gian" },
  { fr: "Août", vi: "Tháng 8", topic: "Thời gian" },
  { fr: "Septembre", vi: "Tháng 9", topic: "Thời gian" },
  { fr: "Octobre", vi: "Tháng 10", topic: "Thời gian" },
  { fr: "Novembre", vi: "Tháng 11", topic: "Thời gian" },
  { fr: "Décembre", vi: "Tháng 12", topic: "Thời gian" },
  { fr: "Matin", vi: "Sáng", topic: "Thời gian" },
  { fr: "Après-midi", vi: "Chiều", topic: "Thời gian" },
  { fr: "Soir", vi: "Tối", topic: "Thời gian" },
  { fr: "Nuit", vi: "Đêm", topic: "Thời gian" },
  { fr: "Minuit", vi: "Nửa đêm", topic: "Thời gian" },
  { fr: "Midi", vi: "Trưa", topic: "Thời gian" },
  { fr: "Heure", vi: "Giờ", topic: "Thời gian" },
  { fr: "Minute", vi: "Phút", topic: "Thời gian" },
  { fr: "Seconde", vi: "Giây", topic: "Thời gian" },
  { fr: "Jour", vi: "Ngày", topic: "Thời gian" },
  { fr: "Semaine", vi: "Tuần", topic: "Thời gian" },
  { fr: "Mois", vi: "Tháng", topic: "Thời gian" },
  { fr: "Année", vi: "Năm", topic: "Thời gian" },
  { fr: "Siècle", vi: "Thế kỷ", topic: "Thời gian" },
  { fr: "Hier", vi: "Hôm qua", topic: "Thời gian" },
  { fr: "Aujourd'hui", vi: "Hôm nay", topic: "Thời gian" },
  { fr: "Demain", vi: "Ngày mai", topic: "Thời gian" },
  { fr: "Après-demain", vi: "Ngày kia", topic: "Thời gian" },
  { fr: "Avant-hier", vi: "Hôm kia", topic: "Thời gian" },
  { fr: "Quelle heure est-il?", vi: "Mấy giờ rồi?", topic: "Thời gian" },
  { fr: "Il est une heure", vi: "Bây giờ là 1 giờ", topic: "Thời gian" },
  { fr: "Il est deux heures", vi: "Bây giờ là 2 giờ", topic: "Thời gian" },
  { fr: "Il est trois heures", vi: "Bây giờ là 3 giờ", topic: "Thời gian" },
  { fr: "Il est quatre heures", vi: "Bây giờ là 4 giờ", topic: "Thời gian" },
  { fr: "Il est cinq heures", vi: "Bây giờ là 5 giờ", topic: "Thời gian" },
  { fr: "Il est six heures", vi: "Bây giờ là 6 giờ", topic: "Thời gian" },
  { fr: "Il est sept heures", vi: "Bây giờ là 7 giờ", topic: "Thời gian" },
  { fr: "Il est huit heures", vi: "Bây giờ là 8 giờ", topic: "Thời gian" },
  { fr: "Il est neuf heures", vi: "Bây giờ là 9 giờ", topic: "Thời gian" },
  { fr: "Il est dix heures", vi: "Bây giờ là 10 giờ", topic: "Thời gian" },
  { fr: "Il est onze heures", vi: "Bây giờ là 11 giờ", topic: "Thời gian" },
  { fr: "Il est midi", vi: "Bây giờ là 12 giờ trưa", topic: "Thời gian" },
  { fr: "Printemps", vi: "Mùa xuân", topic: "Thời gian" },
  { fr: "Été", vi: "Mùa hè", topic: "Thời gian" },
  { fr: "Automne", vi: "Mùa thu", topic: "Thời gian" },
  { fr: "Hiver", vi: "Mùa đông", topic: "Thời gian" },
  { fr: "Père", vi: "Bố", topic: "Gia đình" },
  { fr: "Mère", vi: "Mẹ", topic: "Gia đình" },
  { fr: "Fils", vi: "Con trai", topic: "Gia đình" },
  { fr: "Fille", vi: "Con gái", topic: "Gia đình" },
  { fr: "Frère", vi: "Anh/em trai", topic: "Gia đình" },
  { fr: "Sœur", vi: "Chị/em gái", topic: "Gia đình" },
  { fr: "Grand-mère", vi: "Bà ngoại", topic: "Gia đình" },
  { fr: "Grand-père", vi: "Ông ngoại", topic: "Gia đình" },
  { fr: "Oncle", vi: "Cậu/chú", topic: "Gia đình" },
  { fr: "Tante", vi: "Cô/dì", topic: "Gia đình" },
  { fr: "Cousin", vi: "Anh/em họ nam", topic: "Gia đình" },
  { fr: "Cousine", vi: "Chị/em họ nữ", topic: "Gia đình" },
  { fr: "Petit-fils", vi: "Cháu trai", topic: "Gia đình" },
  { fr: "Petite-fille", vi: "Cháu gái", topic: "Gia đình" },
  { fr: "Mari", vi: "Chồng", topic: "Gia đình" },
  { fr: "Femme", vi: "Vợ", topic: "Gia đình" },
  { fr: "Beau-père", vi: "Cha chồng/bố vợ", topic: "Gia đình" },
  { fr: "Belle-mère", vi: "Mẹ chồng/mẹ vợ", topic: "Gia đình" },
  { fr: "Beau-frère", vi: "Anh/em nuôi", topic: "Gia đình" },
  { fr: "Belle-sœur", vi: "Chị/em nuôi", topic: "Gia đình" },
  { fr: "Ami", vi: "Bạn nam", topic: "Gia đình" },
  { fr: "Amie", vi: "Bạn nữ", topic: "Gia đình" },
  { fr: "Voisin", vi: "Hàng xóm nam", topic: "Gia đình" },
  { fr: "Voisine", vi: "Hàng xóm nữ", topic: "Gia đình" },
  { fr: "Collègue", vi: "Đồng nghiệp", topic: "Gia đình" },
  { fr: "Chef", vi: "Sếp", topic: "Gia đình" },
  { fr: "Employeur", vi: "Chủ nhân", topic: "Gia đình" },
  { fr: "Étudiant", vi: "Sinh viên", topic: "Gia đình" },
  { fr: "Professeur", vi: "Thầy cô", topic: "Gia đình" },
  { fr: "Maison", vi: "Nhà", topic: "Nhà ở" },
  { fr: "Appartement", vi: "Chung cư", topic: "Nhà ở" },
  { fr: "Villa", vi: "Biệt thự", topic: "Nhà ở" },
  { fr: "Cottage", vi: "Nhà nông thôn", topic: "Nhà ở" },
  { fr: "Chambre", vi: "Phòng ngủ", topic: "Nhà ở" },
  { fr: "Salon", vi: "Phòng khách", topic: "Nhà ở" },
  { fr: "Salle à manger", vi: "Phòng ăn", topic: "Nhà ở" },
  { fr: "Cuisine", vi: "Bếp", topic: "Nhà ở" },
  { fr: "Salle de bain", vi: "Phòng tắm", topic: "Nhà ở" },
  { fr: "Toilettes", vi: "Nhà vệ sinh", topic: "Nhà ở" },
  { fr: "Buanderie", vi: "Phòng giặt", topic: "Nhà ở" },
  { fr: "Grenier", vi: "Gác mái", topic: "Nhà ở" },
  { fr: "Sous-sol", vi: "Hầm", topic: "Nhà ở" },
  { fr: "Terrasse", vi: "Ban công", topic: "Nhà ở" },
  { fr: "Balcon", vi: "Lan can", topic: "Nhà ở" },
  { fr: "Jardin", vi: "Vườn", topic: "Nhà ở" },
  { fr: "Garage", vi: "Nhà để xe", topic: "Nhà ở" },
  { fr: "Porte", vi: "Cửa", topic: "Nhà ở" },
  { fr: "Fenêtre", vi: "Cửa sổ", topic: "Nhà ở" },
  { fr: "Mur", vi: "Tường", topic: "Nhà ở" },
  { fr: "Plafond", vi: "Trần", topic: "Nhà ở" },
  { fr: "Sol", vi: "Sàn", topic: "Nhà ở" },
  { fr: "Escalier", vi: "Cầu thang", topic: "Nhà ở" },
  { fr: "Ascenseur", vi: "Thang máy", topic: "Nhà ở" },
  { fr: "Lit", vi: "Giường", topic: "Nhà ở" },
  { fr: "Table", vi: "Bàn", topic: "Nhà ở" },
  { fr: "Chaise", vi: "Ghế", topic: "Nhà ở" },
  { fr: "Canapé", vi: "Sofa", topic: "Nhà ở" },
  { fr: "Armoire", vi: "Tủ quần áo", topic: "Nhà ở" },
  { fr: "Étagère", vi: "Kệ", topic: "Nhà ở" },
  { fr: "Bureau", vi: "Bàn làm việc", topic: "Nhà ở" },
  { fr: "Lampe", vi: "Đèn", topic: "Nhà ở" },
  { fr: "Miroir", vi: "Gương", topic: "Nhà ở" },
  { fr: "Tableau", vi: "Tranh", topic: "Nhà ở" },
  { fr: "Tapis", vi: "Thảm", topic: "Nhà ở" },
  { fr: "Rideau", vi: "Rèm", topic: "Nhà ở" },
  { fr: "Clou", vi: "Đinh", topic: "Nhà ở" },
  { fr: "Tournevis", vi: "Tuốc nơ vít", topic: "Nhà ở" },
  { fr: "Marteau", vi: "Cái búa", topic: "Nhà ở" },
  { fr: "Peinture", vi: "Sơn", topic: "Nhà ở" },
  { fr: "Papier peint", vi: "Giấy dán tường", topic: "Nhà ở" },
  { fr: "Carrelage", vi: "Gạch lát", topic: "Nhà ở" },
  { fr: "Béton", vi: "Bê tông", topic: "Nhà ở" },
  { fr: "Bois", vi: "Gỗ", topic: "Nhà ở" },
  { fr: "Pierre", vi: "Đá", topic: "Nhà ở" },
  { fr: "Brique", vi: "Gạch", topic: "Nhà ở" },
  { fr: "Lourd", vi: "Nặng", topic: "Tính chất" },
  { fr: "Léger", vi: "Nhẹ", topic: "Tính chất" },
  { fr: "Grand", vi: "To", topic: "Tính chất" },
  { fr: "Petit", vi: "Nhỏ", topic: "Tính chất" },
  { fr: "Long", vi: "Dài", topic: "Tính chất" },
  { fr: "Court", vi: "Ngắn", topic: "Tính chất" },
  { fr: "Haut", vi: "Cao", topic: "Tính chất" },
  { fr: "Bas", vi: "Thấp", topic: "Tính chất" },
  { fr: "Chaud", vi: "Nóng", topic: "Tính chất" },
  { fr: "Froid", vi: "Lạnh", topic: "Tính chất" },
  { fr: "Chaud et froid", vi: "Âm dương", topic: "Tính chất" },
  { fr: "Sec", vi: "Khô", topic: "Tính chất" },
  { fr: "Humide", vi: "Ẩm", topic: "Tính chất" },
  { fr: "Mou", vi: "Mềm", topic: "Tính chất" },
  { fr: "Dur", vi: "Cứng", topic: "Tính chất" },
  { fr: "Lisse", vi: "Mịn", topic: "Tính chất" },
  { fr: "Rugueux", vi: "Nhấp nhô", topic: "Tính chất" },
  { fr: "Blanc", vi: "Trắng", topic: "Tính chất" },
  { fr: "Noir", vi: "Đen", topic: "Tính chất" },
  { fr: "Rouge", vi: "Đỏ", topic: "Tính chất" },
  { fr: "Bleu", vi: "Xanh dương", topic: "Tính chất" },
  { fr: "Vert", vi: "Xanh lá", topic: "Tính chất" },
  { fr: "Jaune", vi: "Vàng", topic: "Tính chất" },
  { fr: "Orange", vi: "Cam", topic: "Tính chất" },
  { fr: "Violet", vi: "Tím", topic: "Tính chất" },
  { fr: "Rose", vi: "Hồng", topic: "Tính chất" },
  { fr: "Gris", vi: "Xám", topic: "Tính chất" },
  { fr: "Marron", vi: "Nâu", topic: "Tính chất" },
  { fr: "Clair", vi: "Sáng", topic: "Tính chất" },
  { fr: "Sombre", vi: "Tối", topic: "Tính chất" },
  { fr: "Brillant", vi: "Sáng bóng", topic: "Tính chất" },
  { fr: "Terne", vi: "Mờ", topic: "Tính chất" },
  { fr: "Savoureux", vi: "Ngon", topic: "Tính chất" },
  { fr: "Amer", vi: "Đắng", topic: "Tính chất" },
  { fr: "Sucré", vi: "Ngọt", topic: "Tính chất" },
  { fr: "Salé", vi: "Mặn", topic: "Tính chất" },
  { fr: "Acide", vi: "Chua", topic: "Tính chất" },
  { fr: "Épicé", vi: "Cay", topic: "Tính chất" },
  { fr: "Chat", vi: "Mèo", topic: "Động vật" },
  { fr: "Chien", vi: "Chó", topic: "Động vật" },
  { fr: "Oiseau", vi: "Chim", topic: "Động vật" },
  { fr: "Poisson", vi: "Cá", topic: "Động vật" },
  { fr: "Souris", vi: "Chuột", topic: "Động vật" },
  { fr: "Rat", vi: "Chuột cống", topic: "Động vật" },
  { fr: "Lapin", vi: "Thỏ", topic: "Động vật" },
  { fr: "Hamster", vi: "Chuột xinh", topic: "Động vật" },
  { fr: "Gerbille", vi: "Chuột dầu", topic: "Động vật" },
  { fr: "Serpent", vi: "Rắn", topic: "Động vật" },
  { fr: "Lézard", vi: "Kỳ đà", topic: "Động vật" },
  { fr: "Tortue", vi: "Rùa", topic: "Động vật" },
  { fr: "Grenouille", vi: "Ếch", topic: "Động vật" },
  { fr: "Insecte", vi: "Côn trùng", topic: "Động vật" },
  { fr: "Papillon", vi: "Bướm", topic: "Động vật" },
  { fr: "Abeille", vi: "Ong", topic: "Động vật" },
  { fr: "Fourmi", vi: "Kiến", topic: "Động vật" },
  { fr: "Guêpe", vi: "Ong bắp cày", topic: "Động vật" },
  { fr: "Mouche", vi: "Ruồi", topic: "Động vật" },
  { fr: "Moustique", vi: "Muỗi", topic: "Động vật" },
  { fr: "Cafard", vi: "Gián", topic: "Động vật" },
  { fr: "Araignée", vi: "Nhện", topic: "Động vật" },
  { fr: "Scarabée", vi: "Bộ sậu", topic: "Động vật" },
  { fr: "Libellule", vi: "Chuồn chuồn", topic: "Động vật" },
  { fr: "Sauterelle", vi: "Châu chấu", topic: "Động vật" },
  { fr: "Cochon", vi: "Heo", topic: "Động vật" },
  { fr: "Cheval", vi: "Ngựa", topic: "Động vật" },
  { fr: "Vache", vi: "Bò", topic: "Động vật" },
  { fr: "Mouton", vi: "Cừu", topic: "Động vật" },
  { fr: "Chèvre", vi: "Dê", topic: "Động vật" },
  { fr: "Chameau", vi: "Lạc đà", topic: "Động vật" },
  { fr: "Zèbre", vi: "Ngựa vằn", topic: "Động vật" },
  { fr: "Girafe", vi: "Hươu cao cổ", topic: "Động vật" },
  { fr: "Lion", vi: "Sư tử", topic: "Động vật" },
  { fr: "Tigre", vi: "Hổ", topic: "Động vật" },
  { fr: "Éléphant", vi: "Voi", topic: "Động vật" },
  { fr: "Hippopotame", vi: "Hà mã", topic: "Động vật" },
  { fr: "Rhinocéros", vi: "Tê giác", topic: "Động vật" },
  { fr: "Ours", vi: "Gấu", topic: "Động vật" },
  { fr: "Loup", vi: "Sói", topic: "Động vật" },
  { fr: "Renard", vi: "Chồn", topic: "Động vật" },
  { fr: "Cerf", vi: "Hươu", topic: "Động vật" },
  { fr: "Antilope", vi: "Linh dương", topic: "Động vật" },
  { fr: "Kangourou", vi: "Kangaroo", topic: "Động vật" },
  { fr: "Koala", vi: "Gấu koala", topic: "Động vật" },
  { fr: "Panda", vi: "Gấu trúc", topic: "Động vật" },
  { fr: "Singe", vi: "Khỉ", topic: "Động vật" },
  { fr: "Gorille", vi: "Khỉ đột", topic: "Động vật" },
  { fr: "Chimpanzé", vi: "Tinh tinh", topic: "Động vật" },
  { fr: "Baleine", vi: "Cá voi", topic: "Động vật" },
  { fr: "Dauphin", vi: "Cá heo", topic: "Động vật" },
  { fr: "Requin", vi: "Cá mập", topic: "Động vật" },
  { fr: "Crocodile", vi: "Cá sấu", topic: "Động vật" },
  { fr: "Alligator", vi: "Alligator", topic: "Động vật" },
  { fr: "Perroquet", vi: "Vẹt", topic: "Động vật" },
  { fr: "Hibou", vi: "Cú", topic: "Động vật" },
  { fr: "Aigle", vi: "Đại bàng", topic: "Động vật" },
  { fr: "Faucon", vi: "Ưng", topic: "Động vật" },
  { fr: "Canard", vi: "Vịt", topic: "Động vật" },
  { fr: "Oie", vi: "Ngỗng", topic: "Động vật" },
  { fr: "Cygne", vi: "Thiên nga", topic: "Động vật" },
  { fr: "Pigeon", vi: "Bồ câu", topic: "Động vật" },
  { fr: "Corbeau", vi: "Quạ", topic: "Động vật" },
  { fr: "Pie", vi: "Chim cánh cụt", topic: "Động vật" },
  { fr: "Chardonneret", vi: "Sẻ vàng", topic: "Động vật" },
  { fr: "Roitelet", vi: "Chim hâm hâm", topic: "Động vật" },
  { fr: "Coucou", vi: "Chim cu cu", topic: "Động vật" },
  { fr: "Hirondelle", vi: "Chim yến", topic: "Động vật" },
  { fr: "Moineau", vi: "Chim sẻ", topic: "Động vật" },
  { fr: "Être", vi: "Là", topic: "Động từ" },
  { fr: "Avoir", vi: "Có", topic: "Động từ" },
  { fr: "Faire", vi: "Làm", topic: "Động từ" },
  { fr: "Aller", vi: "Đi", topic: "Động từ" },
  { fr: "Venir", vi: "Đến", topic: "Động từ" },
  { fr: "Pouvoir", vi: "Có thể", topic: "Động từ" },
  { fr: "Vouloir", vi: "Muốn", topic: "Động từ" },
  { fr: "Devoir", vi: "Phải", topic: "Động từ" },
  { fr: "Savoir", vi: "Biết", topic: "Động từ" },
  { fr: "Croire", vi: "Tin", topic: "Động từ" },
  { fr: "Voir", vi: "Thấy", topic: "Động từ" },
  { fr: "Entendre", vi: "Nghe", topic: "Động từ" },
  { fr: "Parler", vi: "Nói", topic: "Động từ" },
  { fr: "Écouter", vi: "Nghe", topic: "Động từ" },
  { fr: "Regarder", vi: "Nhìn", topic: "Động từ" },
  { fr: "Écrire", vi: "Viết", topic: "Động từ" },
  { fr: "Lire", vi: "Đọc", topic: "Động từ" },
  { fr: "Marcher", vi: "Đi bộ", topic: "Động từ" },
  { fr: "Courir", vi: "Chạy", topic: "Động từ" },
  { fr: "Sauter", vi: "Nhảy", topic: "Động từ" },
  { fr: "Danser", vi: "Nhảy múa", topic: "Động từ" },
  { fr: "Chanter", vi: "Hát", topic: "Động từ" },
  { fr: "Jouer", vi: "Chơi", topic: "Động từ" },
  { fr: "Rire", vi: "Cười", topic: "Động từ" },
  { fr: "Pleurer", vi: "Khóc", topic: "Động từ" },
  { fr: "Manger", vi: "Ăn", topic: "Động từ" },
  { fr: "Boire", vi: "Uống", topic: "Động từ" },
  { fr: "Cuire", vi: "Nấu", topic: "Động từ" },
  { fr: "Mélanger", vi: "Trộn", topic: "Động từ" },
  { fr: "Verser", vi: "Đổ", topic: "Động từ" },
  { fr: "Couper", vi: "Cắt", topic: "Động từ" },
  { fr: "Casser", vi: "Bẻ", topic: "Động từ" },
  { fr: "Écraser", vi: "Dập", topic: "Động từ" },
  { fr: "Presser", vi: "Ép", topic: "Động từ" },
  { fr: "Pousser", vi: "Đẩy", topic: "Động từ" },
  { fr: "Tirer", vi: "Kéo", topic: "Động từ" },
  { fr: "Soulever", vi: "Nâng", topic: "Động từ" },
  { fr: "Baisser", vi: "Hạ", topic: "Động từ" },
  { fr: "Ouvrir", vi: "Mở", topic: "Động từ" },
  { fr: "Fermer", vi: "Đóng", topic: "Động từ" },
  { fr: "Tenir", vi: "Cầm", topic: "Động từ" },
  { fr: "Lâcher", vi: "Thả", topic: "Động từ" },
  { fr: "Mettre", vi: "Đặt", topic: "Động từ" },
  { fr: "Enlever", vi: "Tháo", topic: "Động từ" },
  { fr: "Accrocher", vi: "Treo", topic: "Động từ" },
  { fr: "Décrocher", vi: "Tháo", topic: "Động từ" },
  { fr: "Chercher", vi: "Tìm", topic: "Động từ" },
  { fr: "Trouver", vi: "Tìm thấy", topic: "Động từ" },
  { fr: "Perdre", vi: "Mất", topic: "Động từ" },
  { fr: "Rendre", vi: "Trả", topic: "Động từ" },
  { fr: "Donner", vi: "Cho", topic: "Động từ" },
  { fr: "Recevoir", vi: "Nhận", topic: "Động từ" },
  { fr: "Prendre", vi: "Lấy", topic: "Động từ" },
  { fr: "Offrir", vi: "Tặng", topic: "Động từ" },
  { fr: "Voler", vi: "Ăn cắp", topic: "Động từ" },
  { fr: "Acheter", vi: "Mua", topic: "Động từ" },
  { fr: "Vendre", vi: "Bán", topic: "Động từ" },
  { fr: "Payer", vi: "Trả tiền", topic: "Động từ" },
  { fr: "Coûter", vi: "Giá", topic: "Động từ" },
  { fr: "Dépenser", vi: "Tiêu", topic: "Động từ" },
  { fr: "Économiser", vi: "Tiết kiệm", topic: "Động từ" },
  { fr: "Travailler", vi: "Làm việc", topic: "Động từ" },
  { fr: "Apprendre", vi: "Học", topic: "Động từ" },
  { fr: "Enseigner", vi: "Dạy", topic: "Động từ" },
  { fr: "Oublier", vi: "Quên", topic: "Động từ" },
  { fr: "Souvenir", vi: "Nhớ", topic: "Động từ" },
  { fr: "Penser", vi: "Nghĩ", topic: "Động từ" },
  { fr: "Réfléchir", vi: "Suy tư", topic: "Động từ" },
  { fr: "Comprendre", vi: "Hiểu", topic: "Động từ" },
  { fr: "Expliquer", vi: "Giải thích", topic: "Động từ" },
  { fr: "Demander", vi: "Hỏi", topic: "Động từ" },
  { fr: "Répondre", vi: "Đáp", topic: "Động từ" },
  { fr: "Dire", vi: "Nói", topic: "Động từ" },
  { fr: "Crier", vi: "Hét", topic: "Động từ" },
  { fr: "Murmurer", vi: "Tóp", topic: "Động từ" },
  { fr: "Chuchoter", vi: "Thì thầm", topic: "Động từ" },
  { fr: "Appeler", vi: "Gọi", topic: "Động từ" },
  { fr: "Répondre à l'appel", vi: "Trả lời lời gọi", topic: "Động từ" },
  { fr: "Crier fort", vi: "Thét", topic: "Động từ" },
  { fr: "Respirer", vi: "Thở", topic: "Động từ" },
  { fr: "Tousser", vi: "Ho", topic: "Động từ" },
  { fr: "Éternuer", vi: "Hắt hơi", topic: "Động từ" },
  { fr: "Hiccups", vi: "Nấc", topic: "Động từ" },
  { fr: "Siffler", vi: "Soi", topic: "Động từ" },
  { fr: "Clignoter", vi: "Nháy", topic: "Động từ" },
  { fr: "Dormir", vi: "Ngủ", topic: "Động từ" },
  { fr: "Réveiller", vi: "Thức", topic: "Động từ" },
  { fr: "S'endormir", vi: "Ngủ", topic: "Động từ" },
  { fr: "Se lever", vi: "Thức dậy", topic: "Động từ" },
  { fr: "Se coucher", vi: "Đi ngủ", topic: "Động từ" },
  { fr: "S'habiller", vi: "Mặc", topic: "Động từ" },
  { fr: "Se déshabiller", vi: "Cởi", topic: "Động từ" },
  { fr: "Se laver", vi: "Rửa", topic: "Động từ" },
  { fr: "Se brosser les dents", vi: "Đánh răng", topic: "Động từ" },
  { fr: "Se peigner", vi: "Chải tóc", topic: "Động từ" },
  { fr: "Se raser", vi: "Cạo râu", topic: "Động từ" },
  { fr: "Se maquiller", vi: "Trang điểm", topic: "Động từ" },
  { fr: "Se parfumer", vi: "Phun nước hoa", topic: "Động từ" },
  { fr: "Se faire belle", vi: "Trang điểm xinh", topic: "Động từ" },
  { fr: "Se détendre", vi: "Thư giãn", topic: "Động từ" },
  { fr: "S'asseoir", vi: "Ngồi", topic: "Động từ" },
  { fr: "Se tenir debout", vi: "Đứng", topic: "Động từ" },
  { fr: "S'étirer", vi: "Duỗi", topic: "Động từ" },
  { fr: "Se pencher", vi: "Cúi", topic: "Động từ" },
  { fr: "Se tourner", vi: "Quay", topic: "Động từ" },
  { fr: "Se retourner", vi: "Quay lại", topic: "Động từ" },
  { fr: "S'agenouiller", vi: "Quỳ", topic: "Động từ" },
  { fr: "Se mettre à quatre pattes", vi: "Bò", topic: "Động từ" },
  { fr: "S'accroupir", vi: "Ngồi xổm", topic: "Động từ" },
  { fr: "Se relever", vi: "Đứng lên", topic: "Động từ" },
  { fr: "S'effondrer", vi: "Ngã", topic: "Động từ" },
  { fr: "Tomber", vi: "Rơi", topic: "Động từ" },
  { fr: "Glisser", vi: "Trượt", topic: "Động từ" },
  { fr: "Trébucher", vi: "Vấp", topic: "Động từ" },
  { fr: "Buter", vi: "Bộp", topic: "Động từ" },
  { fr: "Se cogner", vi: "Đụng", topic: "Động từ" },
  { fr: "Se faire mal", vi: "Bị đau", topic: "Động từ" },
  { fr: "Se blesser", vi: "Bị thương", topic: "Động từ" },
  { fr: "Saigner", vi: "Chảy máu", topic: "Động từ" },
  { fr: "S'évanouir", vi: "Thất tỉnh", topic: "Động từ" },
  { fr: "Regagner conscience", vi: "Tỉnh dậy", topic: "Động từ" },
  { fr: "Vomiter", vi: "Nôn", topic: "Động từ" },
  { fr: "Uriner", vi: "Đi tiểu", topic: "Động từ" },
  { fr: "Faire ses besoins", vi: "Đi đại tiện", topic: "Động từ" },
  { fr: "Sourire", vi: "Mỉm cười", topic: "Động từ" },
  { fr: "Grincer des dents", vi: "Nghiến răng", topic: "Động từ" },
  { fr: "Froncer les sourcils", vi: "Cau mày", topic: "Động từ" },
  { fr: "Cligner des yeux", vi: "Nháy mắt", topic: "Động từ" },
  { fr: "Regarder fixement", vi: "Nhìn chằm chằm", topic: "Động từ" },
  { fr: "Détourner le regard", vi: "Nhìn đi chỗ khác", topic: "Động từ" },
  { fr: "Bailler", vi: "Ngáp", topic: "Động từ" },
  { fr: "Faire un signe de la main", vi: "Vẫy tay", topic: "Động từ" },
  { fr: "Faire un geste", vi: "Làm cử chỉ", topic: "Động từ" },
  { fr: "Hocher la tête", vi: "Cúi gật", topic: "Động từ" },
  { fr: "Secouer la tête", vi: "Lắc đầu", topic: "Động từ" },
  { fr: "Hausser les épaules", vi: "Nhún vai", topic: "Động từ" },
  { fr: "Taper du pied", vi: "Cọ chân", topic: "Động từ" },
  { fr: "Taper des mains", vi: "Vỗ tay", topic: "Động từ" },
  { fr: "Claquer des mains", vi: "Tay vỗ", topic: "Động từ" },
  { fr: "Frapper", vi: "Đánh", topic: "Động từ" },
  { fr: "Gifler", vi: "Cắn", topic: "Động từ" },
  { fr: "Serrer la main", vi: "Bắt tay", topic: "Động từ" },
  { fr: "Enlacer", vi: "Ôm", topic: "Động từ" },
  { fr: "Embrasser", vi: "Hôn", topic: "Động từ" },
  { fr: "Caresser", vi: "Vuốt", topic: "Động từ" },
  { fr: "Pincer", vi: "Giật", topic: "Động từ" },
  { fr: "Gratter", vi: "Gắt", topic: "Động từ" },
  { fr: "Frotter", vi: "Cọ", topic: "Động từ" },
  { fr: "Masser", vi: "Xoa", topic: "Động từ" },
  { fr: "Étreindre", vi: "Ôm chặt", topic: "Động từ" },
  { fr: "Étrangler", vi: "Cầu", topic: "Động từ" },
  { fr: "Étouffer", vi: "Ngạt", topic: "Động từ" },
  { fr: "Sentir", vi: "Ngửi", topic: "Động từ" },
  { fr: "Déguster", vi: "Nếm", topic: "Động từ" },
  { fr: "Sucer", vi: "Hút", topic: "Động từ" },
  { fr: "Mâcher", vi: "Nhai", topic: "Động từ" },
  { fr: "Avaler", vi: "Nuốt", topic: "Động từ" },
  { fr: "Se gargariser", vi: "Súc miệng", topic: "Động từ" },
  { fr: "Brosser", vi: "Chải", topic: "Động từ" },
  { fr: "Nettoyer", vi: "Lau", topic: "Động từ" },
  { fr: "Rincer", vi: "Xả", topic: "Động từ" },
  { fr: "Sécher", vi: "Sấy", topic: "Động từ" },
  { fr: "Essorer", vi: "Vắt", topic: "Động từ" },
  { fr: "Essayer", vi: "Thử", topic: "Động từ" },
  { fr: "Poser", vi: "Đặt", topic: "Động từ" },
  { fr: "Transporter", vi: "Mang", topic: "Động từ" },
  { fr: "Lancer", vi: "Ném", topic: "Động từ" },
  { fr: "Attraper", vi: "Bắt", topic: "Động từ" },
  { fr: "Jeter", vi: "Vứt", topic: "Động từ" },
  { fr: "Ramasser", vi: "Nhặt", topic: "Động từ" },
  { fr: "Traîner", vi: "Kéo", topic: "Động từ" },
  { fr: "Rouler", vi: "Lăn", topic: "Động từ" },
  { fr: "Maintenir", vi: "Giữ", topic: "Động từ" },
  { fr: "Soutenir", vi: "Nâng đỡ", topic: "Động từ" },
  { fr: "Diriger", vi: "Chỉ đạo", topic: "Động từ" },
  { fr: "Mener", vi: "Dẫn", topic: "Động từ" },
  { fr: "Suivre", vi: "Theo", topic: "Động từ" },
  { fr: "Précéder", vi: "Dẫn trước", topic: "Động từ" },
  { fr: "Accompagner", vi: "Đi cùng", topic: "Động từ" },
  { fr: "Conduire", vi: "Lái", topic: "Động từ" },
  { fr: "Naviguer", vi: "Điều hành", topic: "Động từ" },
  { fr: "Piloter", vi: "Lái bay", topic: "Động từ" },
  { fr: "Tourner", vi: "Quay", topic: "Động từ" },
  { fr: "Pivotter", vi: "Xoay", topic: "Động từ" },
  { fr: "Rebondir", vi: "Nhảy lại", topic: "Động từ" },
  { fr: "Flotter", vi: "Nổi", topic: "Động từ" },
  { fr: "Plonger", vi: "Lặn", topic: "Động từ" },
  { fr: "Nager", vi: "Bơi", topic: "Động từ" },
  { fr: "Souquer", vi: "Chèo", topic: "Động từ" },
  { fr: "Ramer", vi: "Chèo thuyền", topic: "Động từ" },
  { fr: "Faire du ski", vi: "Trượt tuyết", topic: "Động từ" },
  { fr: "Faire du patin", vi: "Trượt patin", topic: "Động từ" },
  { fr: "Faire du surf", vi: "Lướt sóng", topic: "Động từ" },
  { fr: "Faire du vélo", vi: "Đi xe đạp", topic: "Động từ" },
  { fr: "Faire du cheval", vi: "Cưỡi ngựa", topic: "Động từ" },
  { fr: "Sauter à la corde", vi: "Nhảy dây", topic: "Động từ" },
  { fr: "Jouer au tennis", vi: "Chơi quần vợt", topic: "Động từ" },
  { fr: "Jouer au foot", vi: "Chơi bóng đá", topic: "Động từ" },
  { fr: "Jouer au basket", vi: "Chơi bóng rổ", topic: "Động từ" },
  { fr: "Jouer au volley", vi: "Chơi bóng chuyền", topic: "Động từ" },
  { fr: "Boxe", vi: "Quyền Anh", topic: "Động từ" },
  { fr: "Lutte", vi: "Đô vật", topic: "Động từ" },
  { fr: "Judo", vi: "Judo", topic: "Động từ" },
  { fr: "Karaté", vi: "Karate", topic: "Động từ" },
  { fr: "Taekwondo", vi: "Taekwondo", topic: "Động từ" },
  { fr: "Énergie", vi: "Năng lượng", topic: "Khoa học" },
  { fr: "Force", vi: "Lực", topic: "Khoa học" },
  { fr: "Vitesse", vi: "Tốc độ", topic: "Khoa học" },
  { fr: "Accélération", vi: "Tăng tốc", topic: "Khoa học" },
  { fr: "Mouvement", vi: "Chuyển động", topic: "Khoa học" },
  { fr: "Immobilité", vi: "Tĩnh tại", topic: "Khoa học" },
  { fr: "Poids", vi: "Trọng lượng", topic: "Khoa học" },
  { fr: "Masse", vi: "Khối lượng", topic: "Khoa học" },
  { fr: "Densité", vi: "Mật độ", topic: "Khoa học" },
  { fr: "Atome", vi: "Nguyên tử", topic: "Khoa học" },
  { fr: "Molécule", vi: "Phân tử", topic: "Khoa học" },
  { fr: "Électron", vi: "Điện tử", topic: "Khoa học" },
  { fr: "Proton", vi: "Proton", topic: "Khoa học" },
  { fr: "Neutron", vi: "Nơtron", topic: "Khoa học" },
  { fr: "Ion", vi: "Ion", topic: "Khoa học" },
  { fr: "Chimie", vi: "Hóa học", topic: "Khoa học" },
  { fr: "Biologie", vi: "Sinh học", topic: "Khoa học" },
  { fr: "Physique", vi: "Vật lý", topic: "Khoa học" },
  { fr: "Géologie", vi: "Địa chất", topic: "Khoa học" },
  { fr: "Astronomie", vi: "Thiên văn", topic: "Khoa học" },
  { fr: "Météorologie", vi: "Khí tượng", topic: "Khoa học" },
  { fr: "Écologie", vi: "Sinh thái học", topic: "Khoa học" },
  { fr: "Génétique", vi: "Di truyền", topic: "Khoa học" },
  { fr: "Évolution", vi: "Tiến hóa", topic: "Khoa học" },
  { fr: "Technologie", vi: "Công nghệ", topic: "Khoa học" },
  { fr: "Internet", vi: "Internet", topic: "Khoa học" },
  { fr: "Ordinateur", vi: "Máy tính", topic: "Khoa học" },
  { fr: "Téléphone", vi: "Điện thoại", topic: "Khoa học" },
  { fr: "Télévision", vi: "Tivi", topic: "Khoa học" },
  { fr: "Radio", vi: "Radio", topic: "Khoa học" },
  { fr: "Électricité", vi: "Điện", topic: "Khoa học" },
  { fr: "Gaz", vi: "Khí", topic: "Khoa học" },
  { fr: "Liquide", vi: "Chất lỏng", topic: "Khoa học" },
  { fr: "Solide", vi: "Chất rắn", topic: "Khoa học" },
  { fr: "Plasma", vi: "Plasma", topic: "Khoa học" },
  { fr: "Température", vi: "Nhiệt độ", topic: "Khoa học" },
  { fr: "Chaleur", vi: "Nhiệt", topic: "Khoa học" },
  { fr: "Lumière", vi: "Ánh sáng", topic: "Khoa học" },
  { fr: "Ombre", vi: "Bóng tối", topic: "Khoa học" },
  { fr: "Son", vi: "Âm thanh", topic: "Khoa học" },
  { fr: "Bruit", vi: "Tiếng ồn", topic: "Khoa học" },
  { fr: "Silence", vi: "Im lặng", topic: "Khoa học" },
  { fr: "Oscillation", vi: "Dao động", topic: "Khoa học" },
  { fr: "Onde", vi: "Sóng", topic: "Khoa học" },
  { fr: "Fréquence", vi: "Tần số", topic: "Khoa học" },
  { fr: "Longueur d'onde", vi: "Bước sóng", topic: "Khoa học" },
  { fr: "Magnétisme", vi: "Từ tính", topic: "Khoa học" },
  { fr: "Magnétique", vi: "Từ", topic: "Khoa học" },
  { fr: "Radioactivité", vi: "Phóng xạ", topic: "Khoa học" },
  { fr: "Nucléaire", vi: "Hạt nhân", topic: "Khoa học" },
  { fr: "Réaction chimique", vi: "Phản ứng hóa học", topic: "Khoa học" },
  { fr: "Combustion", vi: "Cháy", topic: "Khoa học" },
  { fr: "Oxydation", vi: "Oxy hóa", topic: "Khoa học" },
  { fr: "Réduction", vi: "Khử", topic: "Khoa học" },
  { fr: "Acidité", vi: "Tính axit", topic: "Khoa học" },
  { fr: "Alcalinité", vi: "Tính kiềm", topic: "Khoa học" },
  { fr: "pH", vi: "pH", topic: "Khoa học" },
  { fr: "Osmose", vi: "Thẩm thấu", topic: "Khoa học" },
  { fr: "Diffusion", vi: "Khuếch tán", topic: "Khoa học" },
  { fr: "Solubilité", vi: "Độ tan", topic: "Khoa học" },
  { fr: "Cristal", vi: "Tinh thể", topic: "Khoa học" },
  { fr: "Minéral", vi: "Khoáng chất", topic: "Khoa học" },
  { fr: "Ore", vi: "Quặng", topic: "Khoa học" },
  { fr: "Métal", vi: "Kim loại", topic: "Khoa học" },
  { fr: "Non-métal", vi: "Phi kim loại", topic: "Khoa học" },
  { fr: "Alliage", vi: "Hợp kim", topic: "Khoa học" },
  { fr: "Oxyde", vi: "Oxit", topic: "Khoa học" },
  { fr: "Acide", vi: "Axit", topic: "Khoa học" },
  { fr: "Base", vi: "Bazo", topic: "Khoa học" },
  { fr: "Sel", vi: "Muối", topic: "Khoa học" },
  { fr: "Ester", vi: "Este", topic: "Khoa học" }
];

const lessons = [
  {
    level: "A1",
    topic: "Chào hỏi",
    title: "Bài 1: Chào hỏi cơ bản",
    description: "Học những câu chào hỏi đơn giản để bắt đầu giao tiếp.",
    items: ["Bonjour - Xin chào", "Salut - Chào", "Comment ça va? - Bạn khỏe không?", "Merci - Cảm ơn"]
  },
  {
    level: "A1",
    topic: "Chào hỏi",
    title: "Bài 2: Chào hỏi và tạm biệt",
    description: "Luyện câu chào hỏi, đáp lại và tạm biệt cơ bản.",
    items: ["Au revoir - Tạm biệt", "À bientôt - Hẹn gặp lại", "Bonne journée - Chúc một ngày tốt lành"]
  },
  {
    level: "A1",
    topic: "Hỏi đường",
    title: "Bài 3: Hỏi đường và yêu cầu",
    description: "Cách hỏi đường và yêu cầu lịch sự trong giao tiếp.",
    items: ["Où est...? - Ở đâu...?", "S'il vous plaît - Xin vui lòng", "Je ne comprends pas - Tôi không hiểu."]
  },
  {
    level: "A2",
    topic: "Giới thiệu",
    title: "Bài 4: Giới thiệu bản thân",
    description: "Các mẫu câu để tự giới thiệu và hỏi tên.",
    items: ["Je m'appelle... - Tôi tên là...", "Enchanté(e) - Rất vui được gặp", "Parlez-vous français? - Bạn có nói tiếng Pháp không?"]
  },
  {
    level: "A2",
    topic: "Mua sắm",
    title: "Bài 5: Mua sắm và thanh toán",
    description: "Học cách hỏi giá và yêu cầu tại cửa hàng.",
    items: ["Combien ça coûte? - Bao nhiêu tiền?", "Je voudrais... - Tôi muốn...", "C'est trop cher - Nó quá đắt"]
  },
  {
    level: "A2",
    topic: "Ăn uống",
    title: "Bài 6: Đặt món và gọi đồ ăn",
    description: "Các mẫu câu dùng trong nhà hàng và quán cà phê.",
    items: ["Je voudrais une table pour deux - Tôi muốn một bàn cho hai người", "L'addition, s'il vous plaît - Thanh toán, xin vui lòng", "C'est délicieux - Ngon quá"]
  },
  {
    level: "B1",
    topic: "Du lịch",
    title: "Bài 7: Du lịch và khách sạn",
    description: "Học câu hỏi về khách sạn và phương tiện đi lại.",
    items: ["Où est la gare? - Nhà ga ở đâu?", "J'ai une réservation - Tôi đã đặt chỗ", "Je voudrais un billet aller-retour - Tôi muốn một vé khứ hồi"]
  },
  {
    level: "B1",
    topic: "Giao tiếp",
    title: "Bài 8: Giao tiếp lịch sự và trợ giúp",
    description: "Luyện đề nghị giúp đỡ, trả lời và xác nhận thông tin.",
    items: ["Pouvez-vous m'aider? - Bạn có thể giúp tôi không?", "Je ne parle pas bien français - Tôi không nói giỏi tiếng Pháp", "Pouvez-vous répéter? - Bạn có thể nhắc lại không?"]
  }
];

const quizQuestions = [
  {
    topic: "Chào hỏi",
    question: "Nghĩa của 'Bonjour' là gì?",
    options: ["Xin chào", "Tạm biệt", "Cảm ơn", "Không"],
    answer: 0
  },
  {
    topic: "Chào hỏi",
    question: "'Comment ça va?' nghĩa là?",
    options: ["Bạn khỏe không?", "Tôi tên là...", "Xin vui lòng", "Tạm biệt"],
    answer: 0
  },
  {
    topic: "Hỏi đường",
    question: "'Où est la gare?' nghĩa là gì?",
    options: ["Nhà ga ở đâu?", "Tôi không hiểu", "Tôi muốn...", "Cám ơn"],
    answer: 0
  },
  {
    topic: "Hỏi đường",
    question: "Câu nào dùng để hỏi 'Bạn có nói tiếng Pháp không?'?",
    options: ["Parlez-vous français?", "Je suis désolé", "À bientôt", "Merci"],
    answer: 0
  },
  {
    topic: "Giới thiệu",
    question: "'Je m'appelle...' nghĩa là gì?",
    options: ["Tôi tên là...", "Tôi muốn...", "Tôi không hiểu", "Bạn khỏe không?"],
    answer: 0
  },
  {
    topic: "Mua sắm",
    question: "'Combien ça coûte?' nghĩa là gì?",
    options: ["Bao nhiêu tiền?", "Cám ơn", "Xin chào", "Tạm biệt"],
    answer: 0
  },
  {
    topic: "Mua sắm",
    question: "'Je voudrais...' được dùng khi nào?",
    options: ["Khi yêu cầu một món đồ", "Khi chia tay", "Khi chào hỏi", "Khi giới thiệu bản thân"],
    answer: 0
  },
  {
    topic: "Ăn uống",
    question: "Câu nào nghĩa là 'Thanh toán, xin vui lòng'?:",
    options: ["L'addition, s'il vous plaît", "Je voudrais une table", "C'est délicieux", "Bonjour"],
    answer: 0
  },
  {
    topic: "Du lịch",
    question: "'J'ai une réservation' nghĩa là gì?",
    options: ["Tôi đã đặt chỗ", "Tôi muốn một vé", "Tôi không nói giỏi tiếng Pháp", "Xin chào"],
    answer: 0
  },
  {
    topic: "Giao tiếp",
    question: "'Pouvez-vous m'aider?' nghĩa là gì?",
    options: ["Bạn có thể giúp tôi không?", "Bạn có khỏe không?", "Xin chào", "Tạm biệt"],
    answer: 0
  }
];

const wordEl = document.getElementById("word");
const meaningEl = document.getElementById("meaning");
const exampleEl = document.getElementById("example");
const progressEl = document.getElementById("progress");
const statusEl = document.getElementById("status");
const wordChips = document.getElementById("wordChips");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const showBtn = document.getElementById("showBtn");
const voiceBtn = document.getElementById("voiceBtn");
const pronunciationBtn = document.getElementById("pronunciationBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const searchInput = document.getElementById("searchInput");
const topicFilterSelect = document.getElementById("topicFilterSelect");
const favoriteToggle = document.getElementById("favoriteToggle");
const tabs = document.querySelectorAll(".tab");
const vocabSection = document.getElementById("vocabSection");
const vocabControls = document.getElementById("vocabControls");
const vocabList = document.getElementById("vocabList");
const lessonSection = document.getElementById("lessonSection");
const lessonLevelSelect = document.getElementById("lessonLevelSelect");
const lessonTopicSelect = document.getElementById("lessonTopicSelect");
const lessonCards = document.getElementById("lessonCards");
const exerciseSection = document.getElementById("exerciseSection");
const exerciseTopicSelect = document.getElementById("exerciseTopicSelect");
const exerciseIndex = document.getElementById("exerciseIndex");
const exerciseTotal = document.getElementById("exerciseTotal");
const exerciseQuestion = document.getElementById("exerciseQuestion");
const exerciseOptions = document.getElementById("exerciseOptions");
const submitBtn = document.getElementById("submitBtn");
const nextExerciseBtn = document.getElementById("nextExerciseBtn");
const exerciseFeedback = document.getElementById("exerciseFeedback");
const exerciseScore = document.getElementById("exerciseScore");
const flashcardSection = document.getElementById("flashcardSection");
const flashcardTopicSelect = document.getElementById("flashcardTopicSelect");
const flashcardWord = document.getElementById("flashcardWord");
const flashcardMeaning = document.getElementById("flashcardMeaning");
const flipBtn = document.getElementById("flipBtn");
const flashcardNextBtn = document.getElementById("flashcardNextBtn");
const flashcardProgress = document.getElementById("flashcardProgress");
const progressSection = document.getElementById("progressSection");
const progressWords = document.getElementById("progressWords");
const progressQuizzes = document.getElementById("progressQuizzes");
const progressQuizTotal = document.getElementById("progressQuizTotal");
const progressPoints = document.getElementById("progressPoints");
const progressLessons = document.getElementById("progressLessons");
const progressLessonTotal = document.getElementById("progressLessonTotal");
const currentStreakEl = document.getElementById("currentStreak");
const bestStreakEl = document.getElementById("bestStreak");
const recentList = document.getElementById("recentList");
const speechFeedback = document.getElementById("speechFeedback");
const aiSection = document.getElementById("aiSection");
const aiTopicSelect = document.getElementById("aiTopicSelect");
const aiChatWindow = document.getElementById("aiChatWindow");
const aiInput = document.getElementById("aiInput");
const aiStatusEl = document.getElementById("aiStatus");
const playPhraseBtn = document.getElementById("playPhraseBtn");
const startVoiceBtn = document.getElementById("startVoiceBtn");
const sendAIMessageBtn = document.getElementById("sendAIMessageBtn");
const resetAIConversationBtn = document.getElementById("resetAIConversationBtn");
const aiSpeechFeedback = document.getElementById("aiSpeechFeedback");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const toastContainer = document.getElementById("toastContainer");
const modalContainer = document.getElementById("modalContainer");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const closeModalBtn = document.getElementById("closeModalBtn");
const authModal = document.getElementById("authModal");
const closeAuthModalBtn = document.getElementById("closeAuthModalBtn");
const openAuthBtn = document.getElementById("openAuthBtn");
const authForm = document.getElementById("authForm");
const authEmailInput = document.getElementById("authEmail");
const authPasswordInput = document.getElementById("authPassword");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const toggleRegisterMode = document.getElementById("toggleRegisterMode");
const logoutBtn = document.getElementById("logoutBtn");
const accountStatus = document.getElementById("accountStatus");
const userGreeting = document.getElementById("userGreeting");
const authModalTitle = document.getElementById("authModalTitle");
const themeToggle = document.getElementById("themeToggle");
let authModeIsRegister = false;

let currentIndex = 0;
let meaningVisible = false;
let selectedVoice = null;
let isDarkMode = false;
let currentUserEmail = "";
let userAccounts = {};
let currentExercise = 0;
let score = 0;
let completed = false;
let flashcardIndex = 0;
let quizCompletedCount = 0;
let quizHistory = [];
let recentWords = [];
let lessonSeen = false;
let selectedLessonLevel = "A1";
let selectedLessonTopic = "Tất cả";
let selectedFlashcardTopic = "Tất cả";
let selectedQuizTopic = "Tất cả";
let selectedVocabTopic = "Tất cả";
let selectedAITopic = "Tất cả";
let selectedTab = "vocab";
let searchQuery = "";
let showFavorites = false;
let favoriteWords = [];
let recognition = null;
let isRecognizing = false;
let currentStreak = 0;
let bestStreak = 0;
let lastPracticeDate = "";
let aiCurrentWord = null;
let aiChatMessages = [];
let aiRecognition = null;
let aiRecognizing = false;

function setStatus(message) {
  statusEl.textContent = message;
}

function showToast(message, type = "info") {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(14px)";
    setTimeout(() => toast.remove(), 260);
  }, 2600);
}

function hashPassword(password) {
  try {
    return btoa(password);
  } catch (error) {
    return password;
  }
}

function loadAccounts() {
  const data = localStorage.getItem("frenchAppAccounts");
  if (!data) return;
  try {
    userAccounts = JSON.parse(data) || {};
  } catch {
    userAccounts = {};
  }
}

function saveAccounts() {
  localStorage.setItem("frenchAppAccounts", JSON.stringify(userAccounts));
}

function updateAuthUI() {
  if (currentUserEmail) {
    if (openAuthBtn) openAuthBtn.classList.add("hidden");
    if (logoutBtn) logoutBtn.classList.remove("hidden");
    if (userGreeting) userGreeting.textContent = currentUserEmail.split("@")[0];
  } else {
    if (openAuthBtn) openAuthBtn.classList.remove("hidden");
    if (logoutBtn) logoutBtn.classList.add("hidden");
    if (userGreeting) userGreeting.textContent = "Khách";
  }
}

function openAuthModal(isRegister = false) {
  authModeIsRegister = isRegister;
  if (authModal) authModal.classList.remove("hidden");
  if (authModalTitle) authModalTitle.textContent = isRegister ? "Đăng ký" : "Đăng nhập";
  if (toggleRegisterMode) toggleRegisterMode.textContent = isRegister ? "Đăng nhập thay vì" : "Đăng ký thay vì";
  if (authEmailInput) authEmailInput.focus();
}

function closeAuthModal() {
  if (authModal) authModal.classList.add("hidden");
  if (authForm) authForm.reset();
}

function loadUserState(state) {
  if (!state || typeof state !== "object") return;
  if (typeof state.currentIndex === "number") currentIndex = state.currentIndex;
  if (typeof state.currentExercise === "number") currentExercise = state.currentExercise;
  if (typeof state.score === "number") score = state.score;
  if (typeof state.completed === "boolean") completed = state.completed;
  if (typeof state.flashcardIndex === "number") flashcardIndex = state.flashcardIndex;
  if (typeof state.quizCompletedCount === "number") quizCompletedCount = state.quizCompletedCount;
  if (Array.isArray(state.recentWords)) recentWords = state.recentWords;
  if (typeof state.lessonSeen === "boolean") lessonSeen = state.lessonSeen;
  if (typeof state.selectedLessonLevel === "string") selectedLessonLevel = state.selectedLessonLevel;
  if (typeof state.selectedLessonTopic === "string") selectedLessonTopic = state.selectedLessonTopic;
  if (typeof state.selectedQuizTopic === "string") selectedQuizTopic = state.selectedQuizTopic;
  if (typeof state.selectedFlashcardTopic === "string") selectedFlashcardTopic = state.selectedFlashcardTopic;
  if (typeof state.selectedVocabTopic === "string") selectedVocabTopic = state.selectedVocabTopic;
  if (typeof state.selectedAITopic === "string") selectedAITopic = state.selectedAITopic;
  if (typeof state.selectedTab === "string") selectedTab = state.selectedTab;
  if (typeof state.searchQuery === "string") searchQuery = state.searchQuery;
  if (typeof state.showFavorites === "boolean") showFavorites = state.showFavorites;
  if (Array.isArray(state.favoriteWords)) favoriteWords = state.favoriteWords;
  if (Array.isArray(state.quizHistory)) quizHistory = state.quizHistory;
  if (typeof state.currentStreak === "number") currentStreak = state.currentStreak;
  if (typeof state.bestStreak === "number") bestStreak = state.bestStreak;
  if (typeof state.lastPracticeDate === "string") lastPracticeDate = state.lastPracticeDate;
}

function loginUser(email, password) {
  if (!email || !password) {
    showToast("Nhập email và mật khẩu.", "error");
    return;
  }
  const account = userAccounts[email];
  if (!account) {
    showToast("Tài khoản không tồn tại. Hãy đăng ký trước.", "error");
    return;
  }
  if (account.password !== hashPassword(password)) {
    showToast("Mật khẩu không đúng.", "error");
    return;
  }
  currentUserEmail = email;
  localStorage.setItem("frenchAppCurrentUser", currentUserEmail);
  loadUserState(account.state || {});
  renderAllViewsAfterLogin();
  updateAuthUI();
  closeAuthModal();
  showToast(`Chào ${email.split("@")[0]}! Đăng nhập thành công.`, "success");
}

function registerUser(email, password) {
  if (!email || !password) {
    showToast("Nhập email và mật khẩu để đăng ký.", "error");
    return;
  }
  if (userAccounts[email]) {
    showToast("Email này đã được đăng ký.", "error");
    return;
  }
  userAccounts[email] = {
    password: hashPassword(password),
    state: {}
  };
  saveAccounts();
  currentUserEmail = email;
  localStorage.setItem("frenchAppCurrentUser", currentUserEmail);
  saveState();
  updateAuthUI();
  closeAuthModal();
  showToast(`Chào mừng ${email.split("@")[0]}! Đăng ký thành công.`, "success");
}

function logoutUser() {
  if (currentUserEmail) {
    saveState();
  }
  currentUserEmail = "";
  localStorage.removeItem("frenchAppCurrentUser");
  updateAuthUI();
  showToast("Đã đăng xuất. Hẹn gặp lại!", "info");
}

function renderAllViewsAfterLogin() {
  renderLessonLevelOptions();
  renderLessonTopicOptions();
  renderQuizTopicOptions();
  renderFlashcardTopicOptions();
  renderAITopicOptions();
  renderVocabTopicOptions();
  if (searchInput) searchInput.value = searchQuery;
  if (topicFilterSelect) topicFilterSelect.value = selectedVocabTopic;
  if (aiTopicSelect) aiTopicSelect.value = selectedAITopic;
  renderLessons();
  renderExercise();
  updateWord();
  renderChips();
  renderProgress();
  selectTab(selectedTab || "vocab");
}

function showModal(title, message) {
  if (!modalContainer || !modalTitle || !modalMessage) return;
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modalContainer.classList.remove("hidden");
}

function closeModal() {
  if (!modalContainer) return;
  modalContainer.classList.add("hidden");
}

function applyTheme(mode) {
  isDarkMode = mode === "dark";
  document.body.classList.toggle("dark", isDarkMode);
  if (themeToggle) {
    themeToggle.textContent = isDarkMode ? "Chế độ sáng" : "Chế độ tối";
  }
}

function saveTheme() {
  localStorage.setItem("frenchAppTheme", isDarkMode ? "dark" : "light");
}

function toggleTheme() {
  applyTheme(isDarkMode ? "light" : "dark");
  saveTheme();
}

function loadTheme() {
  const savedTheme = localStorage.getItem("frenchAppTheme");
  if (savedTheme === "dark") {
    applyTheme("dark");
  } else if (savedTheme === "light") {
    applyTheme("light");
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
}

function normalizeDate(value) {
  return value ? new Date(value).toISOString().slice(0, 10) : "";
}

function loadStreakState() {
  const data = localStorage.getItem("frenchAppStreak");
  if (!data) return;
  try {
    const state = JSON.parse(data);
    if (typeof state.currentStreak === "number") currentStreak = state.currentStreak;
    if (typeof state.bestStreak === "number") bestStreak = state.bestStreak;
    if (typeof state.lastPracticeDate === "string") lastPracticeDate = state.lastPracticeDate;
  } catch (error) {
    console.warn("Không tải được chuỗi học:", error);
  }
}

function saveStreakState() {
  localStorage.setItem("frenchAppStreak", JSON.stringify({
    currentStreak,
    bestStreak,
    lastPracticeDate
  }));
}

function refreshStreak() {
  const today = normalizeDate(new Date());
  const yesterday = normalizeDate(new Date(Date.now() - 864e5));
  if (lastPracticeDate === today) {
    return;
  }
  if (lastPracticeDate !== yesterday && lastPracticeDate !== today) {
    currentStreak = 0;
  }
}

function recordDailyPractice() {
  const today = normalizeDate(new Date());
  if (lastPracticeDate === today) {
    return;
  }
  const yesterday = normalizeDate(new Date(Date.now() - 864e5));
  if (lastPracticeDate === yesterday) {
    currentStreak += 1;
  } else {
    currentStreak = 1;
  }
  lastPracticeDate = today;
  if (currentStreak > bestStreak) {
    bestStreak = currentStreak;
  }
  saveStreakState();
  renderProgress();
}

function updateAIStatus(message, success = false) {
  if (!aiStatusEl) return;
  aiStatusEl.textContent = message;
  aiStatusEl.style.color = success ? "#047857" : "#475569";
}

function speakText(text, lang = "fr-FR") {
  if (!window.speechSynthesis) {
    setStatus("Trình duyệt không hỗ trợ phát âm.");
    return;
  }
  stopAudio();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.volume = 1;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.voice = selectedVoice || getFrenchVoice();
  utterance.onstart = () => setStatus(`Phát âm: ${text}`);
  utterance.onend = () => setStatus("Phát âm xong.");
  utterance.onerror = () => setStatus("Lỗi phát âm. Hãy thử lại.");
  window.speechSynthesis.speak(utterance);
}

function getUniqueVocabTopics() {
  const topics = Array.from(new Set(words.map(word => word.topic)));
  return ["Tất cả", ...topics];
}

function getAIPhrases() {
  const selectedTopic = aiTopicSelect && aiTopicSelect.value ? aiTopicSelect.value : "Tất cả";
  return words.filter(word => selectedTopic === "Tất cả" || word.topic === selectedTopic);
}

function renderAITopicOptions() {
  if (!aiTopicSelect) return;
  const topics = getUniqueVocabTopics();
  aiTopicSelect.innerHTML = topics.map(topic => `<option value="${topic}">${topic}</option>`).join("");
  if (!topics.includes(selectedAITopic)) {
    selectedAITopic = "Tất cả";
  }
  aiTopicSelect.value = selectedAITopic;
}

function pickAIPhrase() {
  const phrases = getAIPhrases();
  if (!phrases.length) return null;
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function renderAIChat() {
  if (!aiChatWindow) return;
  aiChatWindow.innerHTML = aiChatMessages
    .map(msg => `<div class="ai-message ${msg.sender === "user" ? "user" : "bot"}">${msg.text}</div>`)
    .join("");
  aiChatWindow.scrollTop = aiChatWindow.scrollHeight;
}

function addAIChatMessage(text, sender = "bot") {
  aiChatMessages.push({ text, sender });
  renderAIChat();
}

function updateAIStarterPhrase() {
  const sample = pickAIPhrase();
  aiCurrentWord = sample;
  if (!sample) {
    updateAIStatus("Không tìm thấy câu hỗ trợ. Hãy thử chọn chủ đề khác.");
    return;
  }
  updateAIStatus(`Gợi ý: "${sample.fr}" — ${sample.vi}`);
}

function getAIReply(userText) {
  const normalized = userText.toLowerCase();
  if (/bonjour|salut|coucou/.test(normalized)) {
    return "Bonjour! Je suis AI của bạn. Bạn muốn học gì hôm nay?";
  }
  if (/merci|cám ơn|thank/.test(normalized)) {
    return "De rien! Tôi luôn sẵn sàng giúp bạn.";
  }
  if (/où est|ở đâu|đâu/.test(normalized)) {
    const phrase = words.find(word => /Où est/.test(word.fr) || /Ở đâu/.test(word.vi));
    return phrase ? `${phrase.fr} — ${phrase.vi}` : "Hãy thử hỏi về địa điểm bằng tiếng Pháp.";
  }
  if (/comment|bạn khỏe/.test(normalized)) {
    return "Comment ça va? — Bạn khỏe không?";
  }
  const topicPhrases = getAIPhrases();
  if (topicPhrases.length) {
    const reply = topicPhrases[Math.floor(Math.random() * topicPhrases.length)];
    return `${reply.fr} — ${reply.vi}`;
  }
  return "Hãy nói bằng tiếng Pháp hoặc tiếng Việt, tôi sẽ trả lời cùng bạn.";
}

function sendAIMessage(message) {
  const text = message.trim();
  if (!text) {
    updateAIStatus("Nhập câu để bắt đầu đối thoại.");
    return;
  }
  if (aiInput) aiInput.value = "";
  addAIChatMessage(text, "user");
  const reply = getAIReply(text);
  setTimeout(() => {
    addAIChatMessage(reply, "bot");
    speakText(reply, "fr-FR");
  }, 260);
  recordDailyPractice();
}

function resetAIConversation() {
  aiChatMessages = [];
  renderAIChat();
  updateAIStarterPhrase();
  updateAIStatus("Đã bắt đầu lại đối thoại. Hãy nhập câu để trò chuyện.");
  showToast("Đã đặt lại cuộc trò chuyện AI.", "info");
}

function createAIRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return null;

  const recognitionInstance = new SpeechRecognition();
  recognitionInstance.lang = "fr-FR";
  recognitionInstance.interimResults = false;
  recognitionInstance.maxAlternatives = 1;

  recognitionInstance.onresult = event => {
    const transcript = event.results[0][0].transcript;
    if (aiSpeechFeedback) {
      aiSpeechFeedback.textContent = `Bạn nói: "${transcript}"`;
      aiSpeechFeedback.classList.remove("hidden");
    }
    sendAIMessage(transcript);
    aiRecognizing = false;
    updateAIButtonState();
  };

  recognitionInstance.onerror = event => {
    const message = event.error === "not-allowed" || event.error === "permission-denied"
      ? "Cần quyền micro. Hãy cho phép để nói với AI."
      : `Lỗi nhận diện: ${event.error}`;
    updateAIStatus(message);
    aiRecognizing = false;
    updateAIButtonState();
  };

  recognitionInstance.onend = () => {
    if (aiRecognizing) {
      aiRecognizing = false;
      updateAIButtonState();
    }
  };

  return recognitionInstance;
}

function updateAIButtonState() {
  if (!startVoiceBtn) return;
  startVoiceBtn.classList.toggle("listening", aiRecognizing);
  startVoiceBtn.textContent = aiRecognizing ? "Dừng nói" : "Nói với AI";
}

function startAIRecognition() {
  aiRecognition = createAIRecognition();
  if (!aiRecognition) {
    updateAIStatus("Trình duyệt không hỗ trợ nhận diện giọng nói.");
    return;
  }
  if (aiSpeechFeedback) {
    aiSpeechFeedback.classList.add("hidden");
  }
  aiRecognizing = true;
  updateAIButtonState();
  updateAIStatus("Đang nghe... Nói câu để trò chuyện cùng AI.");
  aiRecognition.start();
}

function stopAIRecognition() {
  if (aiRecognition) {
    aiRecognition.stop();
  }
  aiRecognizing = false;
  updateAIButtonState();
}

function toggleAIRecognition() {
  if (aiRecognizing) {
    stopAIRecognition();
  } else {
    startAIRecognition();
  }
}

function handleAIChange() {
  resetAIConversation();
}

function getFilteredVocabWords() {
  const query = searchQuery.trim().toLowerCase();
  return words.filter((word, index) => {
    const matchesTopic = selectedVocabTopic === "Tất cả" || word.topic === selectedVocabTopic;
    const matchesFavorite = !showFavorites || favoriteWords.includes(index);
    const matchesSearch = !query || word.fr.toLowerCase().includes(query) || word.vi.toLowerCase().includes(query);
    return matchesTopic && matchesFavorite && matchesSearch;
  });
}

function getFilteredWordIndexes() {
  const query = searchQuery.trim().toLowerCase();
  return words
    .map((word, index) => index)
    .filter(index => {
      const word = words[index];
      const matchesTopic = selectedVocabTopic === "Tất cả" || word.topic === selectedVocabTopic;
      const matchesFavorite = !showFavorites || favoriteWords.includes(index);
      const matchesSearch = !query || word.fr.toLowerCase().includes(query) || word.vi.toLowerCase().includes(query);
      return matchesTopic && matchesFavorite && matchesSearch;
    });
}

function updateFavoriteButton() {
  if (!favoriteBtn) return;
  const active = favoriteWords.includes(currentIndex);
  favoriteBtn.textContent = active ? "Bỏ yêu thích" : "Yêu thích";
}

function updateFavoriteToggle() {
  if (!favoriteToggle) return;
  favoriteToggle.textContent = showFavorites ? "Hiển thị tất cả" : "Hiện yêu thích";
}

function toggleFavorite() {
  const index = currentIndex;
  if (favoriteWords.includes(index)) {
    favoriteWords = favoriteWords.filter(id => id !== index);
    setStatus("Đã bỏ yêu thích từ này.");
    showToast("Đã bỏ yêu thích.", "info");
  } else {
    favoriteWords.push(index);
    setStatus("Đã thêm vào yêu thích.");
    showToast("Đã thêm vào yêu thích.", "success");
  }
  saveState();
  updateFavoriteButton();
  renderChips();
}

function renderVocabTopicOptions() {
  if (!topicFilterSelect) return;
  const topics = getUniqueVocabTopics();
  topicFilterSelect.innerHTML = topics.map(topic => `<option value="${topic}">${topic}</option>`).join("");
  topicFilterSelect.value = selectedVocabTopic;
}

function applyVocabFilters() {
  const filtered = getFilteredVocabWords();
  if (filtered.length && !filtered.some(word => words.indexOf(word) === currentIndex)) {
    currentIndex = words.indexOf(filtered[0]);
    meaningVisible = false;
  }
  renderChips();
  updateWord();
  saveState();
}

function stopAudio() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

function getVoices() {
  return window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
}

function getFrenchVoice() {
  const voices = getVoices();
  const frenchVoices = voices.filter(voice => voice.lang.startsWith("fr"));
  const preferred = frenchVoices.find(voice => /google|français|francais/i.test(voice.name));
  return preferred || frenchVoices[0] || voices[0] || null;
}

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function createPronunciationRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return null;

  const recognitionInstance = new SpeechRecognition();
  recognitionInstance.lang = "fr-FR";
  recognitionInstance.interimResults = false;
  recognitionInstance.maxAlternatives = 1;

  recognitionInstance.onresult = event => {
    const transcript = event.results[0][0].transcript;
    const normalizedTranscript = normalizeText(transcript);
    const expectedText = normalizeText(words[currentIndex].fr);
    const match = normalizedTranscript === expectedText || expectedText.includes(normalizedTranscript) || normalizedTranscript.includes(expectedText);

    const feedback = match
      ? `Tốt lắm! Bạn đọc đúng: "${transcript}"`
      : `Nghe được: "${transcript}". Từ đúng: "${words[currentIndex].fr}"`;

    if (speechFeedback) {
      speechFeedback.textContent = feedback;
      speechFeedback.classList.remove("hidden");
    }

    setStatus(match ? "Phát âm ổn." : "Hãy thử lại, nói rõ hơn từ tiếng Pháp hiện tại.");
    stopPronunciationRecognition();
  };

  recognitionInstance.onerror = event => {
    const message = event.error === "not-allowed" || event.error === "permission-denied"
      ? "Trình duyệt yêu cầu quyền micro. Hãy cho phép micro để kiểm tra phát âm."
      : `Lỗi phát âm: ${event.error}`;
    setStatus(message);
    stopPronunciationRecognition();
  };

  recognitionInstance.onend = () => {
    if (isRecognizing) {
      stopPronunciationRecognition();
    }
  };

  return recognitionInstance;
}

function updatePronunciationButton() {
  if (!pronunciationBtn) return;
  pronunciationBtn.classList.toggle("listening", isRecognizing);
  pronunciationBtn.textContent = isRecognizing ? "Dừng kiểm tra" : "Kiểm tra phát âm";
}

function stopPronunciationRecognition() {
  if (!recognition) return;
  isRecognizing = false;
  recognition.stop();
  updatePronunciationButton();
}

function startPronunciationRecognition() {
  recognition = createPronunciationRecognition();
  if (!recognition) {
    setStatus("Trình duyệt không hỗ trợ kiểm tra phát âm.");
    return;
  }

  if (speechFeedback) {
    speechFeedback.classList.add("hidden");
  }
  isRecognizing = true;
  updatePronunciationButton();
  setStatus("Đang lắng nghe... Nói rõ từ tiếng Pháp hiện tại.");
  recognition.start();
}

function togglePronunciationRecognition() {
  if (isRecognizing) {
    stopPronunciationRecognition();
  } else {
    startPronunciationRecognition();
  }
}

function speakWord() {
  if (!window.speechSynthesis) {
    setStatus("Trình duyệt không hỗ trợ phát âm.");
    return;
  }

  stopAudio();

  const text = words[currentIndex].fr;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-FR";
  utterance.volume = 1;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.voice = selectedVoice || getFrenchVoice();

  utterance.onstart = () => setStatus(`Phát âm: ${text}`);
  utterance.onend = () => setStatus("Phát âm xong.");
  utterance.onerror = () => setStatus("Lỗi phát âm. Hãy thử lại.");

  window.speechSynthesis.speak(utterance);
}

function addRecentWord(word) {
  recentWords = [word, ...recentWords.filter(item => item !== word)].slice(0, 6);
  renderProgress();
  saveState();
}

function renderRecentList() {
  recentList.innerHTML = recentWords
    .map(item => `<li>${item}</li>`)
    .join("");
}

function getLessonLevels() {
  return [...new Set(lessons.map(lesson => lesson.level))];
}

function getLessonTopics() {
  const topics = [...new Set(lessons.map(lesson => lesson.topic))];
  return ["Tất cả", ...topics];
}

function renderLessonLevelOptions() {
  if (!lessonLevelSelect) return;
  const levels = getLessonLevels();
  lessonLevelSelect.innerHTML = levels
    .map(level => `<option value="${level}">${level}</option>`)
    .join("");
  if (!levels.includes(selectedLessonLevel)) {
    selectedLessonLevel = levels[0] || "";
  }
  lessonLevelSelect.value = selectedLessonLevel;
}

function renderLessonTopicOptions() {
  if (!lessonTopicSelect) return;
  const topics = getLessonTopics();
  lessonTopicSelect.innerHTML = topics
    .map(topic => `<option value="${topic}">${topic}</option>`)
    .join("");
  if (!topics.includes(selectedLessonTopic)) {
    selectedLessonTopic = topics[0] || "Tất cả";
  }
  lessonTopicSelect.value = selectedLessonTopic;
}

function getQuizTopics() {
  const topics = [...new Set(quizQuestions.map(question => question.topic))];
  return ["Tất cả", ...topics];
}

function renderQuizTopicOptions() {
  if (!exerciseTopicSelect) return;
  const topics = getQuizTopics();
  exerciseTopicSelect.innerHTML = topics
    .map(topic => `<option value="${topic}">${topic}</option>`)
    .join("");
  if (!topics.includes(selectedQuizTopic)) {
    selectedQuizTopic = topics[0] || "Tất cả";
  }
  exerciseTopicSelect.value = selectedQuizTopic;
}

function getFlashcardTopics() {
  const topics = [...new Set(words.map(word => word.topic).filter(Boolean))];
  return ["Tất cả", ...topics];
}

function renderFlashcardTopicOptions() {
  if (!flashcardTopicSelect) return;
  const topics = getFlashcardTopics();
  flashcardTopicSelect.innerHTML = topics
    .map(topic => `<option value="${topic}">${topic}</option>`)
    .join("");
  if (!topics.includes(selectedFlashcardTopic)) {
    selectedFlashcardTopic = topics[0] || "Tất cả";
  }
  flashcardTopicSelect.value = selectedFlashcardTopic;
}

function getFilteredFlashcards() {
  return words.filter(word => selectedFlashcardTopic === "Tất cả" || word.topic === selectedFlashcardTopic);
}

function renderLessons() {
  lessonCards.innerHTML = "";
  const filtered = lessons.filter(lesson => {
    const levelMatch = lesson.level === selectedLessonLevel;
    const topicMatch = selectedLessonTopic === "Tất cả" || lesson.topic === selectedLessonTopic;
    return levelMatch && topicMatch;
  });

  if (!filtered.length) {
    lessonCards.innerHTML = `<p class="lesson-empty">Không có giao trình cho mức ${selectedLessonLevel} và chủ đề ${selectedLessonTopic}.</p>`;
    return;
  }

  filtered.forEach((lesson) => {
    const card = document.createElement("article");
    card.className = "lesson-card";
    card.innerHTML = `
      <h3>${lesson.level} - ${lesson.topic}: ${lesson.title}</h3>
      <p>${lesson.description}</p>
      <ul>${lesson.items.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
    lessonCards.appendChild(card);
  });
}

function saveState() {
  const state = {
    currentIndex,
    currentExercise,
    score,
    completed,
    flashcardIndex,
    quizCompletedCount,
    recentWords,
    lessonSeen,
    selectedLessonLevel,
    selectedLessonTopic,
    selectedQuizTopic,
    selectedFlashcardTopic,
    selectedVocabTopic,
    selectedAITopic,
    selectedTab,
    searchQuery,
    showFavorites,
    favoriteWords,
    quizHistory,
    currentStreak,
    bestStreak,
    lastPracticeDate
  };
  if (currentUserEmail) {
    if (!userAccounts[currentUserEmail]) {
      userAccounts[currentUserEmail] = { password: "", state: {} };
    }
    userAccounts[currentUserEmail].state = state;
    saveAccounts();
    localStorage.setItem("frenchAppCurrentUser", currentUserEmail);
  }
  localStorage.setItem("frenchAppState", JSON.stringify(state));
}

function loadState() {
  loadAccounts();
  currentUserEmail = localStorage.getItem("frenchAppCurrentUser") || "";

  if (currentUserEmail && userAccounts[currentUserEmail] && userAccounts[currentUserEmail].state) {
    loadUserState(userAccounts[currentUserEmail].state);
    return;
  }

  const data = localStorage.getItem("frenchAppState");
  if (!data) return;
  try {
    const state = JSON.parse(data);
    if (typeof state.currentIndex === "number") currentIndex = state.currentIndex;
    if (typeof state.currentExercise === "number") currentExercise = state.currentExercise;
    if (typeof state.score === "number") score = state.score;
    if (typeof state.completed === "boolean") completed = state.completed;
    if (typeof state.flashcardIndex === "number") flashcardIndex = state.flashcardIndex;
    if (typeof state.quizCompletedCount === "number") quizCompletedCount = state.quizCompletedCount;
    if (Array.isArray(state.recentWords)) recentWords = state.recentWords;
    if (typeof state.lessonSeen === "boolean") lessonSeen = state.lessonSeen;
    if (typeof state.selectedLessonLevel === "string") selectedLessonLevel = state.selectedLessonLevel;
    if (typeof state.selectedLessonTopic === "string") selectedLessonTopic = state.selectedLessonTopic;
    if (typeof state.selectedQuizTopic === "string") selectedQuizTopic = state.selectedQuizTopic;
    if (typeof state.selectedFlashcardTopic === "string") selectedFlashcardTopic = state.selectedFlashcardTopic;
    if (typeof state.selectedVocabTopic === "string") selectedVocabTopic = state.selectedVocabTopic;
    if (typeof state.selectedAITopic === "string") selectedAITopic = state.selectedAITopic;
    if (typeof state.selectedTab === "string") selectedTab = state.selectedTab;
    if (typeof state.searchQuery === "string") searchQuery = state.searchQuery;
    if (typeof state.showFavorites === "boolean") showFavorites = state.showFavorites;
    if (Array.isArray(state.favoriteWords)) favoriteWords = state.favoriteWords;
    if (Array.isArray(state.quizHistory)) quizHistory = state.quizHistory;
    if (typeof state.currentStreak === "number") currentStreak = state.currentStreak;
    if (typeof state.bestStreak === "number") bestStreak = state.bestStreak;
    if (typeof state.lastPracticeDate === "string") lastPracticeDate = state.lastPracticeDate;
  } catch (error) {
    console.warn("Không tải được trạng thái lưu trữ:", error);
  }
}

function resetProgress() {
  currentIndex = 0;
  meaningVisible = false;
  currentExercise = 0;
  score = 0;
  completed = false;
  flashcardIndex = 0;
  quizCompletedCount = 0;
  quizHistory = [];
  recentWords = [];
  lessonSeen = false;
  selectedLessonLevel = getLessonLevels()[0] || "A1";
  selectedLessonTopic = getLessonTopics()[0] || "Tất cả";
  selectedQuizTopic = getQuizTopics()[0] || "Tất cả";
  selectedFlashcardTopic = getFlashcardTopics()[0] || "Tất cả";
  updateWord();
  renderChips();
  renderExercise();
  renderProgress();
  renderLessons();
  saveState();
  setStatus("Lộ trình đã được đặt lại.");
}

function renderChips() {
  wordChips.innerHTML = "";
  const filteredWords = getFilteredVocabWords();

  if (!filteredWords.length) {
    const empty = document.createElement("div");
    empty.className = "chip empty";
    empty.textContent = "Không có từ phù hợp. Hãy thử xóa filter hoặc tìm kiếm khác.";
    wordChips.appendChild(empty);
    return;
  }

  filteredWords.forEach(word => {
    const wordIndex = words.indexOf(word);
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `chip${wordIndex === currentIndex ? " active" : ""}`;
    if (favoriteWords.includes(wordIndex)) {
      chip.classList.add("favorite");
    }
    chip.textContent = `${word.fr}`;
    chip.addEventListener("click", () => {
      currentIndex = wordIndex;
      meaningVisible = false;
      updateWord();
      addRecentWord(words[currentIndex].fr);
    });
    wordChips.appendChild(chip);
  });
}

function getFilteredQuizQuestions() {
  return quizQuestions.filter(question => selectedQuizTopic === "Tất cả" || question.topic === selectedQuizTopic);
}

function renderExercise() {
  const questions = getFilteredQuizQuestions();
  if (currentExercise >= questions.length) {
    currentExercise = 0;
  }
  const quiz = questions[currentExercise] || quizQuestions[0];
  exerciseIndex.textContent = questions.length ? currentExercise + 1 : 0;
  exerciseTotal.textContent = questions.length;
  exerciseQuestion.textContent = questions.length ? quiz.question : "Chọn chủ đề để hiển thị bài tập.";
  exerciseOptions.innerHTML = "";

  if (questions.length) {
    quiz.options.forEach((text, index) => {
      const option = document.createElement("label");
      option.className = "option";
      option.innerHTML = `
        <input type="radio" name="exercise" value="${index}">
        <span>${text}</span>
      `;
      exerciseOptions.appendChild(option);
    });
    exerciseFeedback.textContent = "Chọn đáp án và bấm Kiểm tra.";
  } else {
    exerciseOptions.innerHTML = `<p class="lesson-empty">Không có câu hỏi cho chủ đề này. Hãy chọn chủ đề khác.</p>`;
    exerciseFeedback.textContent = "";
  }
  completed = false;
}

function updateWord() {
  const filteredIndexes = getFilteredWordIndexes();
  if (!filteredIndexes.length) {
    wordEl.textContent = "Không có từ phù hợp";
    meaningEl.textContent = "Thử xóa bộ lọc hoặc nhập lại từ khóa.";
    meaningEl.classList.remove("hidden");
    showBtn.textContent = "Hiện nghĩa";
    progressEl.textContent = "0 / 0";
    statusEl.textContent = "Không có từ phù hợp với bộ lọc hiện tại.";
    if (speechFeedback) {
      speechFeedback.classList.add("hidden");
    }
    if (exampleEl) {
      exampleEl.textContent = "";
      exampleEl.classList.add("hidden");
    }
    updateFavoriteButton();
    renderChips();
    return;
  }

  if (!filteredIndexes.includes(currentIndex)) {
    currentIndex = filteredIndexes[0];
  }

  const { fr, vi, example } = words[currentIndex];
  wordEl.textContent = fr;
  meaningEl.textContent = meaningVisible ? vi : "Nhấn \"Hiện nghĩa\" để xem.";
  meaningEl.classList.toggle("hidden", !meaningVisible);
  showBtn.textContent = meaningVisible ? "Ẩn nghĩa" : "Hiện nghĩa";

  const position = filteredIndexes.indexOf(currentIndex);
  const total = filteredIndexes.length || words.length;
  progressEl.textContent = filteredIndexes.length ? `${position + 1} / ${total}` : "0 / 0";
  statusEl.textContent = meaningVisible ? "Nghĩa đã hiển thị." : "Bạn có thể hiển thị nghĩa hoặc nghe phát âm.";

  if (speechFeedback) {
    speechFeedback.classList.add("hidden");
  }

  if (exampleEl) {
    exampleEl.textContent = meaningVisible ? (example ? `Ví dụ: ${example}` : "Chưa có ví dụ cho từ này.") : "";
    exampleEl.classList.toggle("hidden", !meaningVisible);
  }
  updateFavoriteButton();
  renderChips();
}

function nextWord() {
  const indexes = getFilteredWordIndexes();
  if (!indexes.length) return;
  const currentPos = indexes.indexOf(currentIndex);
  const nextPos = currentPos === -1 ? 0 : (currentPos + 1) % indexes.length;
  currentIndex = indexes[nextPos];
  meaningVisible = false;
  updateWord();
  addRecentWord(words[currentIndex].fr);
  recordDailyPractice();
  saveState();
}

function prevWord() {
  const indexes = getFilteredWordIndexes();
  if (!indexes.length) return;
  const currentPos = indexes.indexOf(currentIndex);
  const prevPos = currentPos <= 0 ? indexes.length - 1 : currentPos - 1;
  currentIndex = indexes[prevPos];
  meaningVisible = false;
  updateWord();
  addRecentWord(words[currentIndex].fr);
  recordDailyPractice();
  saveState();
}

function randomWord() {
  const indexes = getFilteredWordIndexes();
  if (!indexes.length) return;
  let nextIndex = currentIndex;
  if (indexes.length === 1) {
    nextIndex = indexes[0];
  } else {
    while (nextIndex === currentIndex) {
      nextIndex = indexes[Math.floor(Math.random() * indexes.length)];
    }
  }
  currentIndex = nextIndex;
  meaningVisible = false;
  updateWord();
  addRecentWord(words[currentIndex].fr);
  recordDailyPractice();
  saveState();
}

function updateFlashcard() {
  const flashcards = getFilteredFlashcards();
  if (!flashcards.length) {
    flashcardWord.textContent = "Không có thẻ cho chủ đề này.";
    flashcardMeaning.textContent = "Hãy chọn chủ đề khác.";
    flashcardMeaning.classList.remove("hidden");
    flashcardProgress.textContent = `0 / 0`;
    flipBtn.disabled = true;
    return;
  }
  flipBtn.disabled = false;
  flashcardIndex = flashcardIndex % flashcards.length;
  const { fr, vi } = flashcards[flashcardIndex];
  flashcardWord.textContent = fr;
  flashcardMeaning.textContent = vi;
  flashcardMeaning.classList.add("hidden");
  flipBtn.textContent = "Lật thẻ";
  flashcardProgress.textContent = `${flashcardIndex + 1} / ${flashcards.length}`;
  addRecentWord(fr);
}

function flipFlashcard() {
  const flipped = !flashcardMeaning.classList.contains("hidden");
  flashcardMeaning.classList.toggle("hidden");
  flipBtn.textContent = flipped ? "Lật thẻ" : "Ẩn nghĩa";
  recordDailyPractice();
}

function renderQuizHistory() {
  const quizHistoryList = document.getElementById("quizHistoryList");
  if (!quizHistoryList) return;
  if (!quizHistory.length) {
    quizHistoryList.innerHTML = `<li>Chưa có lịch sử quiz. Hãy làm vài câu nhé!</li>`;
    return;
  }
  quizHistoryList.innerHTML = quizHistory
    .slice(-5)
    .reverse()
    .map(entry => `<li>${entry.date}: ${entry.result}</li>`)
    .join("");
}

function addQuizHistory(result) {
  const date = normalizeDate(new Date());
  quizHistory.push({ date, result });
  if (quizHistory.length > 10) {
    quizHistory = quizHistory.slice(-10);
  }
}

function nextFlashcard() {
  const flashcards = getFilteredFlashcards();
  if (!flashcards.length) return;
  flashcardIndex = (flashcardIndex + 1) % flashcards.length;
  updateFlashcard();
  recordDailyPractice();
}

function renderProgress() {
  progressWords.textContent = words.length;
  progressQuizTotal.textContent = quizQuestions.length;
  progressQuizzes.textContent = quizCompletedCount;
  progressPoints.textContent = score;
  progressLessons.textContent = lessonSeen ? lessons.length : 0;
  progressLessonTotal.textContent = lessons.length;
  if (currentStreakEl) currentStreakEl.textContent = currentStreak;
  if (bestStreakEl) bestStreakEl.textContent = bestStreak;
  renderRecentList();
  renderQuizHistory();
}

function selectTab(tabName) {
  selectedTab = tabName;
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.tab === tabName));
  const isVocab = tabName === "vocab";
  const isLesson = tabName === "lesson";
  const isExercise = tabName === "exercise";
  const isFlashcard = tabName === "flashcard";
  const isAI = tabName === "aiPractice";
  const isProgress = tabName === "progress";

  vocabSection.classList.toggle("hidden", !isVocab);
  vocabControls.classList.toggle("hidden", !isVocab);
  vocabList.classList.toggle("hidden", !isVocab);
  lessonSection.classList.toggle("hidden", !isLesson);
  exerciseSection.classList.toggle("hidden", !isExercise);
  flashcardSection.classList.toggle("hidden", !isFlashcard);
  aiSection.classList.toggle("hidden", !isAI);
  progressSection.classList.toggle("hidden", !isProgress);

  if (isLesson) {
    lessonSeen = true;
  }

  if (isFlashcard) {
    updateFlashcard();
  }

  if (isAI) {
    if (!aiCurrentWord) updateAIStarterPhrase();
  }

  renderProgress();
  saveState();
}

function checkAnswer() {
  if (completed) {
    exerciseFeedback.textContent = "Bạn đã trả lời câu hỏi này rồi. Bấm Câu kế tiếp để tiếp tục.";
    return;
  }

  const selected = document.querySelector("input[name='exercise']:checked");
  if (!selected) {
    exerciseFeedback.textContent = "Hãy chọn đáp án trước khi kiểm tra.";
    return;
  }

  const questions = getFilteredQuizQuestions();
  const quiz = questions[currentExercise] || quizQuestions[0];
  const userAnswer = Number(selected.value);
  const correctAnswer = quiz.answer;
  if (userAnswer === correctAnswer) {
    score += 1;
    exerciseFeedback.textContent = "Chính xác! Bạn đã trả lời đúng.";
    showToast("Chúc mừng! Bạn chọn đúng.", "success");
    addQuizHistory("Đúng");
  } else {
    exerciseFeedback.textContent = `Sai rồi. Đáp án đúng là: ${quiz.options[correctAnswer]}`;
    showToast("Sai rồi, hãy thử lại lần sau.", "error");
    addQuizHistory(`Sai - Đúng: ${quiz.options[correctAnswer]}`);
  }

  completed = true;
  quizCompletedCount += 1;
  exerciseScore.textContent = `Điểm hiện tại: ${score} / ${quizQuestions.length}`;
  recordDailyPractice();
  renderProgress();
  saveState();
  showModal(
    "Kết quả quiz",
    userAnswer === correctAnswer
      ? "Bạn đã trả lời đúng. Tiếp tục ôn luyện để tăng điểm nhé!"
      : `Bạn trả lời sai. Đáp án đúng là: ${quiz.options[correctAnswer]}`
  );
}

function nextExercise() {
  const questions = getFilteredQuizQuestions();
  if (!questions.length) return;
  currentExercise = (currentExercise + 1) % questions.length;
  completed = false;
  renderExercise();
  recordDailyPractice();
  saveState();
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => selectTab(tab.dataset.tab));
});

showBtn.addEventListener("click", () => {
  meaningVisible = !meaningVisible;
  updateWord();
  recordDailyPractice();
});

voiceBtn.addEventListener("click", () => speakWord());
if (pronunciationBtn) {
  pronunciationBtn.addEventListener("click", togglePronunciationRecognition);
}

nextBtn.addEventListener("click", nextWord);
prevBtn.addEventListener("click", prevWord);
shuffleBtn.addEventListener("click", randomWord);
if (favoriteBtn) {
  favoriteBtn.addEventListener("click", toggleFavorite);
}
if (playPhraseBtn) {
  playPhraseBtn.addEventListener("click", () => {
    const lastBot = aiChatMessages.slice().reverse().find(msg => msg.sender === "bot");
    if (lastBot) {
      speakText(lastBot.text, "fr-FR");
    } else if (aiCurrentWord) {
      speakText(aiCurrentWord.fr || "", "fr-FR");
    } else {
      updateAIStarterPhrase();
    }
    recordDailyPractice();
  });
}
if (startVoiceBtn) {
  startVoiceBtn.addEventListener("click", toggleAIRecognition);
}
if (sendAIMessageBtn) {
  sendAIMessageBtn.addEventListener("click", () => {
    if (aiInput) sendAIMessage(aiInput.value);
  });
}
if (aiInput) {
  aiInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendAIMessage(aiInput.value);
    }
  });
}
if (resetAIConversationBtn) {
  resetAIConversationBtn.addEventListener("click", resetAIConversation);
}
if (searchInput) {
  searchInput.addEventListener("input", event => {
    searchQuery = event.target.value;
    applyVocabFilters();
  });
}
if (topicFilterSelect) {
  topicFilterSelect.addEventListener("change", event => {
    selectedVocabTopic = event.target.value;
    applyVocabFilters();
  });
}
if (favoriteToggle) {
  favoriteToggle.addEventListener("click", () => {
    showFavorites = !showFavorites;
    updateFavoriteToggle();
    applyVocabFilters();
  });
}
if (aiTopicSelect) {
  aiTopicSelect.addEventListener("change", event => {
    selectedAITopic = event.target.value;
    handleAIChange();
    saveState();
  });
}
submitBtn.addEventListener("click", checkAnswer);
nextExerciseBtn.addEventListener("click", nextExercise);
flipBtn.addEventListener("click", flipFlashcard);
flashcardNextBtn.addEventListener("click", nextFlashcard);
if (resetProgressBtn) {
  resetProgressBtn.addEventListener("click", resetProgress);
}
if (openAuthBtn) {
  openAuthBtn.addEventListener("click", () => openAuthModal(false));
}
if (closeAuthModalBtn) {
  closeAuthModalBtn.addEventListener("click", closeAuthModal);
}
if (authModal) {
  authModal.addEventListener("click", event => {
    if (event.target === authModal) {
      closeAuthModal();
    }
  });
}
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    if (!authEmailInput || !authPasswordInput) return;
    const email = authEmailInput.value.trim();
    const password = authPasswordInput.value;
    if (authModeIsRegister) {
      registerUser(email, password);
    } else {
      loginUser(email, password);
    }
  });
}
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    if (!authEmailInput || !authPasswordInput) return;
    const email = authEmailInput.value.trim();
    const password = authPasswordInput.value;
    registerUser(email, password);
    closeAuthModal();
  });
}
if (toggleRegisterMode) {
  toggleRegisterMode.addEventListener("click", e => {
    e.preventDefault();
    openAuthModal(!authModeIsRegister);
  });
}
if (logoutBtn) {
  logoutBtn.addEventListener("click", logoutUser);
}
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}
if (modalContainer) {
  modalContainer.addEventListener("click", event => {
    if (event.target === modalContainer) {
      closeModal();
    }
  });
}
if (lessonLevelSelect) {
  lessonLevelSelect.addEventListener("change", event => {
    selectedLessonLevel = event.target.value;
    renderLessons();
    renderProgress();
    saveState();
  });
}
if (lessonTopicSelect) {
  lessonTopicSelect.addEventListener("change", event => {
    selectedLessonTopic = event.target.value;
    renderLessons();
    renderProgress();
    saveState();
  });
}
if (exerciseTopicSelect) {
  exerciseTopicSelect.addEventListener("change", event => {
    selectedQuizTopic = event.target.value;
    currentExercise = 0;
    renderExercise();
    renderProgress();
    saveState();
  });
}
if (flashcardTopicSelect) {
  flashcardTopicSelect.addEventListener("change", event => {
    selectedFlashcardTopic = event.target.value;
    flashcardIndex = 0;
    updateFlashcard();
    renderProgress();
    saveState();
  });
}

loadState();
updateAuthUI();
loadStreakState();
refreshStreak();
loadTheme();
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}
renderLessonLevelOptions();
renderLessonTopicOptions();
renderQuizTopicOptions();
renderFlashcardTopicOptions();
renderAITopicOptions();
renderVocabTopicOptions();
updateFavoriteToggle();
if (searchInput) searchInput.value = searchQuery;
if (topicFilterSelect) topicFilterSelect.value = selectedVocabTopic;
if (aiTopicSelect) aiTopicSelect.value = selectedAITopic;

renderLessons();
renderExercise();
updateWord();
renderChips();
renderProgress();
selectTab(selectedTab || "vocab");