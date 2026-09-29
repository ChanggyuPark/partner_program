/* ENCY Partner Program — Sixshop loader
   Generated from ency_partner_program_final_with_equipment_visuals.html */
(function(){
  'use strict';

  const CONFIG = {
    sectionWrapper: '#sectionWrapper00000000',
    section: '#section00000000',
    item: '#item00000000',
    itemElement: '#itemElement00000000',
    appId: 'ency-partner-app',
    detectIntervalMs: 250,
    detectTimeoutMs: 15000
  };

  const LANDING_HTML = "<main>\n<section class=\"hero\">\n<div aria-label=\"ENCY CAM 제품 화면\" class=\"hero-showcase\">\n<div class=\"hero-slides\">\n<img alt=\"ENCY CAM 3-axis 화면\" class=\"hero-slide s1\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/3-axis.png\"/>\n<img alt=\"ENCY CAM HSM 화면\" class=\"hero-slide s2\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/HSM.png\"/>\n<img alt=\"ENCY CAM External axes support 화면\" class=\"hero-slide s3\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/External%20axes%20support.png\"/>\n<img alt=\"ENCY CAM State-of-art UI 화면\" class=\"hero-slide s4\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/State-of-art%20UI.png\"/>\n</div>\n</div>\n<div aria-hidden=\"true\" class=\"hero-lines\">\n<svg aria-hidden=\"true\" preserveaspectratio=\"none\" viewbox=\"0 0 1920 800\">\n<g class=\"toolpath-lines\">\n<path d=\"M-80 500 H430 Q500 500 545 455 L690 310\"></path>\n<path d=\"M-80 536 H448 Q520 536 568 488 L712 344\"></path>\n<path d=\"M-80 572 H466 Q540 572 590 522 L734 378\"></path>\n<path d=\"M2000 500 H1490 Q1420 500 1375 455 L1230 310\"></path>\n<path d=\"M2000 536 H1472 Q1400 536 1352 488 L1208 344\"></path>\n<path d=\"M2000 572 H1454 Q1380 572 1330 522 L1186 378\"></path>\n</g>\n<g class=\"toolpath-lower\">\n<path d=\"M760 800 V676 Q760 642 785 618 L850 556\"></path>\n<path d=\"M820 800 V690 Q820 655 842 633 L888 588\"></path>\n<path d=\"M1100 800 V690 Q1100 655 1078 633 L1032 588\"></path>\n<path d=\"M1160 800 V676 Q1160 642 1135 618 L1070 556\"></path>\n</g>\n</svg>\n</div>\n<div class=\"wrap hero-inner\">\n<div class=\"hero-copy\">\n<h1 class=\"h1\"><span class=\"hero-light\">제조업 고객을 만나고 있다면,</span><br/><span class=\"grad\">이제 ENCY를 제안하세요.</span></h1>\n<p class=\"hero-sub\">공작기계·CAD/CAM·산업 소프트웨어·자동화 등 제조 현장에서 쌓은 고객 네트워크를 ENCY와 새로운 비즈니스로 연결하세요.</p>\n<div class=\"actions center\">\n<a class=\"btn\" href=\"#apply\">ENCY 공식 파트너 등록 신청</a>\n<a class=\"btn secondary\" href=\"#support\">지원내용 보기</a>\n</div>\n</div>\n</div>\n</section>\n<section class=\"section why\">\n<div class=\"wrap\">\n<div class=\"why-head\"><h2 class=\"h2\">기존 CAM 대리점 사업의 부담을 줄이고,<br/><span class=\"grad\">새로운 판매 기회를 더하세요.</span></h2><p class=\"desc\">ENCY 파트너 프로그램은 단순한 제품 유통을 넘어, 파트너의 고객·영업 역량에<br/>ENCY KOREA의 본사 협력, 한국 시장에 맞춘 가격·프로모션, 기술지원·교육·마케팅을 더해 새로운 영업 기회를 함께 만드는 구조입니다.</p></div><div class=\"dealer-benefits\"><div class=\"dealer-benefit\"><span class=\"num\">01</span><div><h3>재고 부담 최소화</h3><p>라이선스 선구매와 최소 구매 수량 부담 없이 고객 프로젝트 중심으로 진행합니다.</p></div></div><div class=\"dealer-benefit\"><span class=\"num\">02</span><div><h3>기술지원</h3><p>제품 설명·기술 상담·데모·설치·교육 등 전문 기술 대응을 ENCY KOREA가 지원합니다.</p></div></div><div class=\"dealer-benefit\"><span class=\"num\">03</span><div><h3>마케팅 DB · 영업 기회</h3><p>ENCY KOREA의 마케팅 활동을 통해 확보한 잠재 영업기회를 파트너와 공유할 수 있습니다.</p></div></div><div class=\"dealer-benefit\"><span class=\"num\">04</span><div><h3>수익성 있는 마진</h3><p>판매에 따른 파트너 수익 기회를 마련하며, 세부 공급·수익 조건은 상담을 통해 안내합니다.</p></div></div><div class=\"dealer-benefit\"><span class=\"num\">05</span><div><h3>영업 자료 제공</h3><p>제품 브로셔·데모 영상·고객 설명 콘텐츠 등 공식 영업 자료를 제공합니다.</p></div></div><div class=\"dealer-benefit\"><span class=\"num\">06</span><div><h3>프로모션 · 교육</h3><p>한국 시장에 맞는 프로모션과 고객 교육 활동을 파트너 영업에 활용할 수 있습니다.</p></div></div></div>\n<div class=\"why-grid3\">\n<div class=\"why-card\"><span class=\"num\">01</span><div><h3>선구매 부담 최소화</h3><p>라이선스를 미리 구매하거나 재고를 보유하지 않고 실제 고객 판매 프로젝트를 중심으로 진행합니다.</p></div></div>\n<div class=\"why-card\"><span class=\"num\">02</span><div><h3>기술 대응 지원</h3><p>파트너는 고객 발굴과 영업에 집중하고, 제품 설명·기술 상담·데모 등 전문 영역은 ENCY KOREA와 함께 대응합니다.</p></div></div>\n<div class=\"why-card\"><span class=\"num\">03</span><div><h3>기존 고객에서 확장</h3><p>이미 만나고 있는 제조업 고객에게 ENCY를 새로운 선택지로 제안하며 추가 판매 기회를 만들 수 있습니다.</p></div></div>\n</div>\n<div class=\"quick-support\"><div class=\"quick\"><div><span class=\"qnum\">04</span><strong>제품 · 영업 자료</strong></div><span>브로셔 · 제품자료 · 영상 · 적용사례</span></div><div class=\"quick\"><div><span class=\"qnum\">05</span><strong>기술 상담 · 데모</strong></div><span>고객 상담 · 기술 검토 · 제품 시연</span></div><div class=\"quick\"><div><span class=\"qnum\">06</span><strong>설치 · 교육 · 지원</strong></div><span>판매 이후 고객 운영까지 함께 대응</span></div><div class=\"quick\"><div><span class=\"qnum\">07</span><strong>마케팅 · 영업 기회</strong></div><span>프로모션 활용 · 영업기회 공유 가능</span></div></div>\n<div class=\"fields\"><span class=\"pill\">공작기계</span><span class=\"pill\">CAD/CAM</span><span class=\"pill\">산업 SW</span><span class=\"pill\">제조 영업</span><span class=\"pill\">자동화</span><span class=\"pill\">제조업 네트워크</span></div>\n</div>\n</section>\n<section class=\"section role\">\n<div class=\"wrap\">\n<div class=\"role-head\"><h2 class=\"h2\">개인은 <span style=\"color:#56a1ff\">에이전트</span>로, 사업자는 <span style=\"color:#29d5a2\">리셀러</span>로</h2></div>\n<div class=\"partner-types\">\n<div class=\"ptype agent\">\n<span class=\"type-badge\">AGENT</span>\n<div class=\"type-title\">개인 파트너 <span class=\"type-en\">(에이전트)</span></div>\n<div>\n<p>사업자등록 없이 개인 자격으로 참여할 수 있는 영업 파트너입니다. 고객을 소개하고 계약이 성사되면 약정된 영업 수수료를 지급받습니다.</p>\n<ul class=\"type-list\">\n<li>제조업 고객 네트워크 보유 개인</li>\n<li>전직 장비 영업자 또는 제조업 영업 경험자</li>\n<li>가공업체 · 공장 인맥 보유자</li>\n</ul>\n</div>\n<a class=\"partner-apply\" href=\"#apply\">파트너 신청하기</a></div>\n<div class=\"ptype reseller\">\n<span class=\"type-badge\">RESELLER</span>\n<div class=\"type-title\">사업자 파트너 <span class=\"type-en\">(리셀러)</span></div>\n<div>\n<p>개인사업자 또는 법인사업자가 참여하는 판매 파트너입니다. ENCY KOREA와 공동 영업을 진행할 수 있습니다.</p>\n<ul class=\"type-list\">\n<li>CNC · MCT · 5축 · 턴밀 장비 유통사</li>\n<li>CAD/CAM · MES · ERP 솔루션 기업</li>\n<li>교육기관 · 협회 · 제조 컨설팅사</li>\n</ul>\n</div>\n<a class=\"partner-apply\" href=\"#apply\">파트너 신청하기</a></div>\n</div>\n</div>\n</section>\n<section aria-label=\"장비사 전용 파트너 프로그램\" class=\"equipment-entry\">\n<div class=\"wrap\">\n<div class=\"equipment-entry-card\">\n<div class=\"equipment-entry-copy\">\n<h2>공작기계·로봇 장비사이신가요?</h2>\n<p>장비 판매와 ENCY를 결합해 고객의 도입 부담은 낮추고, 새로운 판매 기회를 만들어보세요.</p>\n<span class=\"equipment-entry-target\">CNC · MCT · 5축 · 턴밀 · 로봇 장비사 대상</span>\n</div>\n<div aria-hidden=\"true\" class=\"equipment-entry-visual\">\n<img alt=\"\" class=\"equipment-cnc\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/smartware-cnc.png\"/>\n<img alt=\"\" class=\"equipment-robot\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/smartware-robot.png\"/>\n</div>\n<a class=\"equipment-entry-btn\" href=\"ency_equipment_partner.html\">장비사 전용 프로그램 보기 →</a>\n</div>\n</div>\n</section>\n<section class=\"section\" id=\"support\">\n<div class=\"wrap\">\n<div class=\"support-head\"><h2 class=\"h2\">대리점의 영업에 필요한 지원,<br/><span class=\"grad\">ENCY KOREA가 함께합니다.</span></h2></div><div class=\"support-visual-grid\"><div class=\"support-visual\">\n<div class=\"image-slot\"><img alt=\"ENCY KOREA 파트너 지원 이미지 01\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/img-01.jpg\"/></div>\n<div class=\"support-visual-copy\"><span class=\"num\">01</span><h3>잠재 영업 기회</h3><p>광고·홈페이지·전시회 등 ENCY KOREA가 확보한 영업기회를 파트너와 공유할 수 있습니다.</p></div>\n</div><div class=\"support-visual\">\n<div class=\"image-slot\"><img alt=\"ENCY KOREA 파트너 지원 이미지 02\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/img-02.jpg\"/></div>\n<div class=\"support-visual-copy\"><span class=\"num\">02</span><h3>제품 · 영업 자료</h3><p>브로셔, 제품 자료, 데모 영상과 적용 사례 등 고객 설명 콘텐츠를 제공합니다.</p></div>\n</div><div class=\"support-visual\">\n<div class=\"image-slot\"><img alt=\"ENCY KOREA 파트너 지원 이미지 03\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/img-03.jpg\"/></div>\n<div class=\"support-visual-copy\"><span class=\"num\">03</span><h3>프로모션 지원</h3><p>한국 시장과 제품 특성에 맞는 프로모션을 파트너 영업에 활용할 수 있도록 지원합니다.</p></div>\n</div><div class=\"support-visual\">\n<div class=\"image-slot\"><img alt=\"ENCY KOREA 파트너 지원 이미지 04\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/img-04.jpg\"/></div>\n<div class=\"support-visual-copy\"><span class=\"num\">04</span><h3>교육 지원</h3><p>고객 및 파트너가 참여할 수 있는 제품 교육을 운영해 영업과 고객 관계 강화를 지원합니다.</p></div>\n</div><div class=\"support-visual\">\n<div class=\"image-slot\"><img alt=\"ENCY KOREA 파트너 지원 이미지 05\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/img-05.jpg\"/></div>\n<div class=\"support-visual-copy\"><span class=\"num\">05</span><h3>기술지원</h3><p>고객 상담, 제품 데모, 적용 검토, 설치와 판매 이후 기술 대응을 함께합니다.</p></div>\n</div><div class=\"support-visual\">\n<div class=\"image-slot\"><img alt=\"ENCY KOREA 파트너 지원 이미지 06\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/img-06.jpg\"/></div>\n<div class=\"support-visual-copy\"><span class=\"num\">06</span><h3>공동 마케팅</h3><p>전시회·세미나 등 공동 마케팅 기회를 통해 고객 접점과 브랜드 활동을 확대할 수 있습니다.</p></div>\n</div></div>\n<div class=\"support-row\"><div class=\"support-card\"><div class=\"support-icon\">01</div><h3>잠재 영업 기회</h3><p>광고·홈페이지·전시회·콘텐츠 등에서 확보한 영업기회를 파트너와 공유할 수 있습니다.</p></div><div class=\"support-card\"><div class=\"support-icon\">02</div><h3>제품 · 영업 자료</h3><p>제품 브로셔, 영업 자료, 데모 영상, 적용 사례 등 고객 설명 콘텐츠를 제공합니다.</p></div><div class=\"support-card\"><div class=\"support-icon\">03</div><h3>프로모션 지원</h3><p>한국 시장과 제품 특성에 맞는 프로모션을 파트너 영업에 활용할 수 있도록 지원합니다.</p></div><div class=\"support-card\"><div class=\"support-icon\">04</div><h3>교육 지원</h3><p>고객 및 파트너가 참여할 수 있는 제품 교육을 운영해 영업과 고객 관계 강화를 지원합니다.</p></div><div class=\"support-card\"><div class=\"support-icon\">05</div><h3>기술지원</h3><p>고객 상담, 제품 데모, 적용 검토, 설치와 판매 이후 기술 대응을 함께합니다.</p></div><div class=\"support-card\"><div class=\"support-icon\">06</div><h3>공동 마케팅</h3><p>전시회·세미나 등 공동 마케팅 기회를 통해 고객 접점과 브랜드 활동을 확대할 수 있습니다.</p></div></div>\n</div>\n</section>\n<section class=\"section product-section\">\n<div class=\"wrap\">\n<div class=\"product-grid\">\n<div class=\"visual\"><img alt=\"ENCY CAM CNC 가공 화면\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/img-cncui.jpg\"/></div>\n<div class=\"product-copy\">\n<h2 class=\"h2\">ENCY CAM에서 시작해 <span class=\"grad\">더 넓은 제조 비즈니스로.</span></h2>\n<p class=\"desc\">다양한 CNC 가공 환경에 대응하는 ENCY CAM을 시작으로,<br/>고객의 요구에 따라 Robot·Hyper와 제조 솔루션까지 제안 영역을 확장할 수 있습니다.</p>\n<div class=\"sub-emphasis\">하나의 고객, 더 넓은 제안</div>\n<p class=\"desc\">기존 가공 고객과의 관계를 기반으로 CAM뿐 아니라 로봇 가공과 제조 디지털화 영역까지 새로운 비즈니스 접점을 만들 수 있습니다.</p>\n<div class=\"flow\"><span><i class=\"product-logo-slot\"><img alt=\"\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/icon-cam.png\"/></i>ENCY CAM</span><i>→</i><span><i class=\"product-logo-slot\"><img alt=\"\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/icon-robot.png\"/></i>ENCY Robot</span><i>→</i><span><i class=\"product-logo-slot\"><img alt=\"\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/icon-hyper.png\"/></i>ENCY Hyper</span><i>→</i><span><i class=\"product-logo-slot\"><img alt=\"\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/ency-partner/landing-page/icon-yc.png\"/></i>제조 솔루션</span></div>\n<div class=\"product-links\">\n<a class=\"product-link\" href=\"https://www.encycadcam.co.kr/\" rel=\"noopener\" target=\"_blank\">ENCY 제품 자세히 보기</a>\n<a class=\"product-link accent\" href=\"https://www.encycadcam.co.kr/case-studies\" rel=\"noopener\" target=\"_blank\">국내 고객 사용 사례</a>\n</div>\n<p class=\"product-note\">고객의 요구가 넓어질수록 파트너가 제안할 수 있는 제조 비즈니스 영역도 함께 확장됩니다.</p>\n</div>\n</div>\n</div>\n</section>\n<section class=\"section\" id=\"join\">\n<div class=\"wrap\">\n<div class=\"join-head\">\n<h2 class=\"h2\">ENCY Partner <span class=\"grad\">참여 절차</span></h2>\n<p class=\"desc\">등록 신청 후 담당자가 현재 활동 분야와 고객 네트워크를 확인하고, 파트너 유형과 프로젝트에 맞는 세부 조건을 함께 협의합니다.</p>\n</div>\n<div class=\"process\"><svg aria-hidden=\"true\" class=\"process-path\" preserveaspectratio=\"none\" viewbox=\"0 0 964 386\">\n<!-- 03→04 turns 64px OUTSIDE the right-hand text column, so the vertical line never crosses copy. -->\n<path class=\"route\" d=\"M20 20 H880 H916 Q944 20 944 48 V228 Q944 256 916 256 H880 H20\"></path>\n<!-- direction arrows -->\n<path class=\"arrow\" d=\"M270 15 L280 20 L270 25 Z\"></path>\n<path class=\"arrow\" d=\"M665 15 L675 20 L665 25 Z\"></path>\n<path class=\"arrow\" d=\"M939 135 L944 145 L949 135 Z\"></path>\n<path class=\"arrow\" d=\"M665 251 L655 256 L665 261 Z\"></path>\n<path class=\"arrow\" d=\"M270 251 L260 256 L270 261 Z\"></path>\n</svg>\n<div class=\"step\"><b>01</b><strong>등록 신청</strong><p>기본 정보와 활동 분야를 남겨주세요.</p></div>\n<div class=\"step\"><b>02</b><strong>담당자 상담</strong><p>신청 내용을 확인하고 연락드립니다.</p></div>\n<div class=\"step\"><b>03</b><strong>활동 분야 확인</strong><p>주요 고객군과 영업 영역을 확인합니다.</p></div>\n<div class=\"step\"><b>04</b><strong>조건 협의</strong><p>파트너 유형과 프로젝트 조건을 협의합니다.</p></div>\n<div class=\"step\"><b>05</b><strong>계약 · 등록</strong><p>협의 내용을 바탕으로 파트너 관계를 확정합니다.</p></div>\n<div class=\"step\"><b>06</b><strong>영업 시작</strong><p>필요한 지원을 연결해 영업을 시작합니다.</p></div>\n</div>\n<p class=\"process-note\">상담과 조건 협의를 거쳐 파트너 등록이 진행되며, 세부 수익 및 공급 조건은 상담 과정에서 개별 안내합니다.</p>\n<div class=\"faq\">\n<div class=\"faq-item open\"><button class=\"faq-q\"><span>사업자가 없어도 신청할 수 있나요?</span><span>×</span></button><div class=\"faq-a\">네. 제조업 관련 고객 네트워크를 보유하고 있다면 개인 파트너(Agent)로 신청할 수 있습니다.</div></div>\n<div class=\"faq-item\"><button class=\"faq-q\"><span>CAD/CAM 전문가가 아니어도 가능한가요?</span><span>+</span></button><div class=\"faq-a\">네. 고객 발굴과 영업에 집중하고 전문적인 제품 설명·데모·기술 상담은 ENCY KOREA와 함께 진행할 수 있습니다.</div></div>\n<div class=\"faq-item\"><button class=\"faq-q\"><span>다른 CAD/CAM 제품을 취급하고 있어도 되나요?</span><span>+</span></button><div class=\"faq-a\">네. 기존에 취급하는 제품이 있어도 ENCY를 새로운 판매 옵션으로 추가할 수 있습니다.</div></div>\n<div class=\"faq-item\"><button class=\"faq-q\"><span>제품이나 라이선스를 미리 구매해야 하나요?</span><span>+</span></button><div class=\"faq-a\">아니요. 재고 선구매나 최소 구매수량 없이 고객 프로젝트를 중심으로 진행합니다.</div></div>\n<div class=\"faq-item\"><button class=\"faq-q\"><span>수익 조건은 어떻게 되나요?</span><span>+</span></button><div class=\"faq-a\">파트너 유형과 프로젝트에 따라 달라질 수 있으며, 세부 조건은 등록 신청 후 담당자 상담을 통해 안내합니다.</div></div>\n</div>\n</div>\n</section>\n<section class=\"section white apply\" id=\"apply\">\n<div class=\"wrap\">\n<div class=\"apply-head\">\n<h2 class=\"h2\">ENCY 공식 파트너 등록 신청</h2>\n<p class=\"desc\">신청 내용을 확인한 후 ENCY KOREA 담당자가 개별 연락드립니다.</p>\n</div>\n<div class=\"form-wrap\">\n<form class=\"form\" id=\"partnerApplicationForm\">\n<div class=\"field\"><label>이름 *</label><input name=\"name\" placeholder=\"이름을 입력해주세요\" required=\"required\"/></div>\n<div class=\"field\"><label>연락처 *</label><input autocomplete=\"tel\" id=\"partnerPhone\" inputmode=\"numeric\" maxlength=\"13\" name=\"phone\" placeholder=\"010-0000-0000\" required=\"required\"/></div>\n<div class=\"field\"><label>이메일 *</label><input name=\"email\" placeholder=\"email@example.com\" required=\"required\" type=\"email\"/></div>\n<div class=\"field\"><label>파트너 유형 *</label><div class=\"options\"><label><input name=\"partner_type\" required=\"required\" type=\"radio\" value=\"개인 파트너\"/><span>개인 파트너</span></label><label><input name=\"partner_type\" required=\"required\" type=\"radio\" value=\"사업자 파트너\"/><span>사업자 파트너</span></label></div></div>\n<div class=\"field\"><label>회사명<span class=\"req\">*</span></label><input name=\"company\" placeholder=\"회사명을 입력해주세요\" required=\"required\"/><small class=\"company-help\">개인 파트너인 경우 ‘개인’으로 입력해주세요.</small></div>\n<div class=\"field\"><label>주요 활동 지역<span class=\"req\">*</span></label><input name=\"region\" placeholder=\"예: 서울 · 경기\" required=\"required\"/></div>\n<div class=\"field\"><label>현재 업종 · 직무<span class=\"req\">*</span></label><input name=\"job\" placeholder=\"예: 공작기계 영업\" required=\"required\"/></div>\n<div class=\"field\"><label>영업 · 판매 경험<span class=\"req\">*</span></label><input name=\"sales_experience\" placeholder=\"예: 제조업 B2B 영업 5년 · CAD/CAM 판매 경험\" required=\"required\"/></div>\n<div class=\"field\"><label>주요 고객군<span class=\"req\">*</span></label><input name=\"customer_group\" placeholder=\"예: 금형 · 자동차 부품 가공업체\" required=\"required\"/></div>\n<div class=\"field\"><label>현재 취급 제품 · 솔루션<span class=\"req\">*</span></label><input name=\"current_products\" placeholder=\"해당되는 경우 입력해주세요\" required=\"required\"/></div>\n<div class=\"field\"><label>문의사항<span class=\"req\">*</span></label><textarea name=\"inquiry\" placeholder=\"궁금한 내용을 자유롭게 남겨주세요\" required=\"required\"></textarea></div>\n<div class=\"privacy-consent\">\n<input id=\"privacyAgree\" name=\"privacy_agree\" required=\"\" type=\"checkbox\"/>\n<label for=\"privacyAgree\"><strong>[필수] 개인정보 수집·이용에 동의합니다.</strong><br/>\n      수집항목: 신청서에 입력한 개인정보 · 이용목적: ENCY 파트너 신청 확인 및 상담 · 보유기간: 파트너 상담 및 관련 업무 종료 후 내부 개인정보 처리방침에 따른 기간까지</label>\n</div><button class=\"btn\" id=\"partnerSubmitButton\" type=\"submit\">파트너 등록 신청</button><div aria-live=\"polite\" id=\"partnerSubmitStatus\" role=\"status\"></div>\n</form>\n<div class=\"phone\"><span class=\"consult-label\">유선 상담</span><strong class=\"consult-name\">김유천 대표이사</strong><span class=\"contact-line\">📱 <a href=\"tel:01091819077\">010-9181-9077</a></span><span class=\"contact-line\">✉️ <a href=\"mailto:yc@ycgroup.co.kr\">yc@ycgroup.co.kr</a></span></div>\n</div>\n</div>\n</section>\n</main><footer class=\"footer\"><div class=\"wrap\"><div class=\"footer-grid\"><div><div style=\"font-size:22px;font-weight:700;margin-bottom:14px\">ENCY KOREA</div><p>ENCY KOREA Partner Program<br/>Official Partner Recruitment</p></div><div><h4>Contact</h4><p>ENCY KOREA<br/>010-9181-9077<br/>yc@ycgroup.co.kr</p></div><div><h4>Company</h4><p>주식회사 와이씨코퍼레이션<br/>Owner: 김유천<br/>Personal Info Manager: 김유천</p></div><div><h4>Address / Business</h4><p>서울특별시 성동구 마조로3길 10<br/>YC College<br/>www.encycadcam.co.kr<br/><br/>397-87-02413<br/>2022-서울성동-02108<br/>yc@ycgroup.co.kr</p></div></div><div class=\"copy\">© 2026 YC Corporation. All rights reserved.</div></div></footer>";
  let initialized = false;
  let hostObserver = null;

  function targetExists(){
    return !!(
      document.querySelector(CONFIG.sectionWrapper) &&
      document.querySelector(CONFIG.section) &&
      document.querySelector(CONFIG.item) &&
      document.querySelector(CONFIG.itemElement)
    );
  }

  function hideSixshopChrome(app){
    Array.from(document.body.children).forEach(function(el){
      if(el === app || el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return;
      if(!el.hasAttribute('data-ency-original-display')){
        el.setAttribute('data-ency-original-display', el.style.display || '');
      }
      el.style.setProperty('display','none','important');
    });
  }

  function keepHostHidden(app){
    if(hostObserver) return;
    hostObserver = new MutationObserver(function(){
      if(!document.body.contains(app)) return;
      hideSixshopChrome(app);
    });
    hostObserver.observe(document.body, {childList:true});
  }

  function initLanding(){
    if(initialized || !targetExists() || !document.body) return false;
    initialized = true;

    let app = document.getElementById(CONFIG.appId);
    if(!app){
      app = document.createElement('div');
      app.id = CONFIG.appId;
      app.innerHTML = LANDING_HTML;
      document.body.prepend(app);
    }

    hideSixshopChrome(app);
    keepHostHidden(app);

    // Smooth in-page anchors, isolated to the landing root.
    app.addEventListener('click', function(e){
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const href = a.getAttribute('href');
      if(!href || href === '#') return;
      const target = app.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });

    app.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.parentElement;app.querySelectorAll('.faq-item').forEach(x=>{if(x!==item){x.classList.remove('open');x.querySelector('.faq-q span:last-child').textContent='+'}});item.classList.toggle('open');btn.querySelector('span:last-child').textContent=item.classList.contains('open')?'×':'+';}));

(function(){
  const webhookUrl='https://hook.us2.make.com/liaghxhcen4vg55rg57xwbrjxpeoq3f2';
  const form=app.querySelector('#partnerApplicationForm');
  const phone=app.querySelector('#partnerPhone');
  const submitButton=app.querySelector('#partnerSubmitButton');
  const status=app.querySelector('#partnerSubmitStatus');
  if(!form||!phone||!submitButton||!status)return;

  function formatKoreanMobile(value){
    let digits=String(value||'').replace(/\D/g,'').slice(0,11);
    if(digits.length<=3)return digits;
    if(digits.length<=7)return digits.slice(0,3)+'-'+digits.slice(3);
    if(digits.length===10)return digits.slice(0,3)+'-'+digits.slice(3,6)+'-'+digits.slice(6);
    return digits.slice(0,3)+'-'+digits.slice(3,7)+'-'+digits.slice(7);
  }

  phone.addEventListener('input',function(){this.value=formatKoreanMobile(this.value);});
  phone.addEventListener('blur',function(){this.value=formatKoreanMobile(this.value);});

  form.addEventListener('submit',async function(event){
    event.preventDefault();
    if(!form.checkValidity()){form.reportValidity();return;}
    const privacy=app.querySelector('#privacyAgree');
    if(!privacy||!privacy.checked){privacy&&privacy.focus();return;}

    phone.value=formatKoreanMobile(phone.value);
    const data=new FormData(form);
    const payload={
      name:String(data.get('name')||'').trim(),
      phone:phone.value,
      email:String(data.get('email')||'').trim(),
      partner_type:String(data.get('partner_type')||''),
      company:String(data.get('company')||'').trim(),
      region:String(data.get('region')||'').trim(),
      job:String(data.get('job')||'').trim(),
      sales_experience:String(data.get('sales_experience')||'').trim(),
      customer_group:String(data.get('customer_group')||'').trim(),
      current_products:String(data.get('current_products')||'').trim(),
      inquiry:String(data.get('inquiry')||'').trim(),
      privacy_agree:true
    };

    submitButton.disabled=true;
    submitButton.textContent='전송 중...';
    submitButton.style.opacity='.65';
    submitButton.style.cursor='wait';
    status.className='';
    status.textContent='';

    try{
      const response=await fetch(webhookUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      if(!response.ok)throw new Error('Webhook request failed: '+response.status);
      form.reset();
      status.className='submit-status success';
      status.textContent='파트너 신청이 완료되었습니다. 담당자가 확인 후 연락드리겠습니다.';
      submitButton.textContent='신청 완료';
      submitButton.style.cursor='default';
    }catch(error){
      console.error('ENCY Partner application submit error:',error);
      status.className='submit-status error';
      status.textContent='신청 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
      submitButton.disabled=false;
      submitButton.textContent='파트너 등록 신청';
      submitButton.style.opacity='';
      submitButton.style.cursor='pointer';
    }
  });
})();

    return true;
  }

  function startDetection(){
    if(initLanding()) return;
    const started = Date.now();
    const timer = setInterval(function(){
      if(initLanding() || Date.now() - started >= CONFIG.detectTimeoutMs){
        clearInterval(timer);
      }
    }, CONFIG.detectIntervalMs);

    // Also react quickly to Sixshop's delayed DOM rendering.
    const observer = new MutationObserver(function(){
      if(initLanding()) observer.disconnect();
    });
    observer.observe(document.documentElement, {childList:true, subtree:true});
    setTimeout(function(){observer.disconnect();}, CONFIG.detectTimeoutMs + 500);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', startDetection, {once:true});
  } else {
    startDetection();
  }
})();
