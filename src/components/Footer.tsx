import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header with Logo and Social Media */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-blue-900 text-3xl font-bold">Security Council</h2>
          <div className="flex items-center space-x-3">
            {/* YouTube */}
            <a href="#" className="text-blue-900 hover:text-blue-700">
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 36 37">
                <circle cx="18" cy="18.43" r="18" fill="#002856"/>
                <path d="M23.3398 12.6741H12.3661C12.3661 12.6741 9.48151 12.6741 9.48151 15.5601V21.5468C9.48151 21.5468 9.48151 24.432 12.3661 24.432H23.3398C23.3398 24.432 26.2264 24.432 26.2264 21.5468V15.5601C26.2264 15.5601 26.2264 12.6741 23.3398 12.6741ZM15.6226 21.7816V15.3407L21.105 18.5611L15.6226 21.7816Z" fill="white"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="text-blue-900 hover:text-blue-700">
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 37 37">
                <circle cx="18.5" cy="18.43" r="18" fill="#002856"/>
                <path d="M27.069 9.82031H25.4585L19.6931 16.0459L15.0374 9.82031H9.56299L16.6683 19.3211L9.51562 27.0489H11.1262L17.3855 20.2887L22.4472 27.0489H27.9216L20.4171 17.0135L27.0758 9.82031H27.069ZM23.0359 25.8579L11.9246 11.0045H14.4419L25.5532 25.8579H23.0359Z" fill="white"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-blue-900 hover:text-blue-700">
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 37 37">
                <circle cx="18.5" cy="18.43" r="18" fill="#002856"/>
                <path d="M10.2443 25.7856H13.6276V14.9593H10.2443V25.7856ZM11.8495 13.6035H11.8251C10.6011 13.6035 9.80714 12.7761 9.80714 11.7283C9.80714 10.6586 10.6242 9.84793 11.8733 9.84793C13.1204 9.84793 13.8886 10.656 13.9124 11.7251C13.9131 12.7729 13.1211 13.6035 11.8495 13.6035ZM27.1611 25.7856H23.3251V20.1831C23.3251 18.7161 22.7266 17.7159 21.4062 17.7159C20.3976 17.7159 19.8364 18.3909 19.5754 19.0421C19.4776 19.2748 19.4924 19.5994 19.4924 19.9273V25.7863H15.6925C15.6925 25.7863 15.742 15.8612 15.6925 14.9593H19.4924V16.6577C19.7168 15.9146 20.9305 14.8532 22.8687 14.8532C25.2724 14.8532 27.1611 16.4115 27.1611 19.7653V25.7856Z" fill="white"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="text-blue-900 hover:text-blue-700">
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 36 37">
                <circle cx="18" cy="18.43" r="18" fill="#002856"/>
                <path d="M14.2638 15.4871H15.984V13.8144C15.984 13.077 16.0033 11.9391 16.5388 11.2352C17.1033 10.4882 17.8773 9.981 19.2092 9.981C21.3802 9.981 22.2943 10.2909 22.2943 10.2909L21.8649 12.8411C21.8649 12.8411 21.1475 12.6334 20.4782 12.6334C19.8084 12.6334 19.2092 12.8739 19.2092 13.5424V15.4871H21.9536L21.7627 17.9775H19.2092V26.6304H15.9834V17.9775H14.2631L14.2638 15.4871Z" fill="white"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-blue-900 hover:text-blue-700">
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 37 37">
                <circle cx="18.9" cy="18.43" r="18" fill="#002856"/>
                <path d="M18.875 36.4346C8.93386 36.4346 0.875 28.3757 0.875 18.4346C0.875 8.49343 8.93386 0.43457 18.875 0.43457C28.8161 0.43457 36.875 8.49343 36.875 18.4346C36.875 28.3757 28.8161 36.4346 18.875 36.4346ZM18.875 34.7599C27.8911 34.7599 35.2004 27.4506 35.2004 18.4346C35.2004 9.4185 27.8911 2.10921 18.875 2.10921C9.85893 2.10921 2.54964 9.4185 2.54964 18.4346C2.54964 27.4506 9.85893 34.7599 18.875 34.7599ZM11.3465 20.8646V15.7654C11.3542 15.7211 11.3677 15.6767 11.3684 15.6324C11.387 15.0249 11.4127 14.4167 11.5644 13.8234C11.9 12.5055 12.6695 11.5496 13.9276 11.0109C14.6495 10.7029 15.4151 10.6206 16.1911 10.6039C16.3068 10.6014 16.4219 10.584 16.5376 10.5737H21.638C21.6817 10.5814 21.7261 10.5911 21.7704 10.5956C22.2789 10.6406 22.7958 10.6419 23.2953 10.7364C24.9641 11.0526 26.075 12.0189 26.5687 13.6607C26.7899 14.3936 26.8066 15.1534 26.8162 15.9088C26.8349 17.2543 26.831 18.6011 26.8271 19.9466C26.8246 20.8106 26.8387 21.6791 26.6703 22.5302C26.3437 24.183 25.3929 25.2906 23.7646 25.7889C23.0414 26.01 22.2937 26.0376 21.5486 26.0428C19.8348 26.0563 18.1203 26.0434 16.4058 26.0325C15.797 26.028 15.1901 25.9907 14.5968 25.8396C13.2789 25.5041 12.323 24.7346 11.7843 23.4765C11.4751 22.7546 11.3934 21.9889 11.3767 21.213C11.3741 21.096 11.3574 20.9809 11.3465 20.8646ZM25.4084 18.3195C25.4129 18.3195 25.4161 18.3195 25.4193 18.3195C25.4193 17.6696 25.436 17.019 25.4148 16.3697C25.3936 15.7114 25.3852 15.0467 25.2849 14.3987C25.103 13.2351 24.4274 12.4714 23.2689 12.1667C22.6441 12.0015 22.0025 11.9983 21.3654 11.9912C19.9582 11.9745 18.551 11.9719 17.1431 11.9893C16.4849 11.9976 15.8201 12.0169 15.1715 12.1185C14.0086 12.3004 13.2449 12.9748 12.9395 14.1339C12.7756 14.7594 12.7711 15.4003 12.764 16.0374C12.7473 17.4446 12.7447 18.8531 12.7621 20.2603C12.7704 20.9186 12.7897 21.5833 12.8913 22.2313C13.0732 23.3949 13.7489 24.1586 14.9073 24.4633C15.5321 24.6285 16.1737 24.6317 16.8108 24.6388C18.218 24.6555 19.6252 24.6581 21.0331 24.6407C21.6914 24.6324 22.3561 24.6124 23.0047 24.5115C24.1265 24.3379 24.8857 23.6983 25.2123 22.5849C25.3807 22.0082 25.3929 21.4136 25.4039 20.8215C25.4199 19.9877 25.4084 19.1539 25.4084 18.3195ZM19.082 14.3299C21.2831 14.3293 23.0735 16.1196 23.0729 18.3201C23.0709 20.5104 21.2786 22.3001 19.0859 22.2994C16.895 22.2994 15.1027 20.5071 15.1027 18.3169C15.104 16.1235 16.8931 14.3299 19.082 14.3299ZM19.0974 15.7423C17.6786 15.7416 16.517 16.8891 16.5157 18.2931C16.5151 19.7248 17.6587 20.8858 19.0711 20.8871C20.5001 20.8877 21.6605 19.7428 21.6611 18.3285C21.6618 16.9014 20.5136 15.7429 19.0974 15.7423ZM24.1541 14.1795C24.1535 13.662 23.7356 13.2486 23.2149 13.2493C22.6981 13.2499 22.2834 13.6684 22.2847 14.1879C22.2854 14.706 22.7039 15.1206 23.2239 15.1187C23.7421 15.1161 24.1548 14.6989 24.1541 14.1795Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Footer Navigation - 3 Columns */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {/* About Security Council */}
          <div>
            <h3 className="text-blue-900 text-xl font-bold mb-12">About Security Council</h3>
            <div className="flex space-x-16">
              <div className="space-y-4">
                <h4 className="text-blue-900 text-sm font-medium">Who we guide</h4>
              </div>
              <div className="space-y-4">
                <h4 className="text-blue-900 text-sm font-medium">Our Intelligence</h4>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-blue-900 text-xl font-bold mb-12">Get in Touch</h3>
            <div className="flex space-x-16">
              {/* Contact Column */}
              <div className="space-y-4">
                <h4 className="text-blue-900 text-sm font-medium">Contact</h4>
                <ul className="space-y-3 text-blue-900 text-sm font-light">
                  <li><a href="#" className="hover:text-blue-700">Contact Us</a></li>
                  <li><a href="#" className="hover:text-blue-700">Become a Client</a></li>
                  <li><a href="#" className="hover:text-blue-700">Platform Access (Login)</a></li>
                  <li><a href="#" className="hover:text-blue-700">Technical Support</a></li>
                </ul>
              </div>
              
              {/* Careers Column */}
              <div className="space-y-4">
                <h4 className="text-blue-900 text-sm font-medium">Careers</h4>
                <ul className="space-y-3 text-blue-900 text-sm font-light">
                  <li><a href="#" className="hover:text-blue-700">Why Security Council</a></li>
                  <li><a href="#" className="hover:text-blue-700">Search Careers</a></li>
                  <li><a href="#" className="hover:text-blue-700">Our Culture</a></li>
                  <li><a href="#" className="hover:text-blue-700">Careers Blog</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Latest Insights */}
          <div>
            <h3 className="text-blue-900 text-xl font-bold mb-12">Latest Insights</h3>
            <div className="space-y-4">
              <h4 className="text-blue-900 text-sm font-medium">Resources</h4>
              <ul className="space-y-3 text-blue-900 text-sm font-light">
                <li><a href="#" className="hover:text-blue-700">Featured Reports</a></li>
                <li><a href="#" className="hover:text-blue-700">Blog & Briefings</a></li>
                <li><a href="#" className="hover:text-blue-700">Newsletter</a></li>
                <li><a href="#" className="hover:text-blue-700">Events</a></li>
                <li><a href="#" className="hover:text-blue-700">Client Stories</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex justify-between items-center pt-6">
          <div className="flex items-center space-x-6 text-gray-600 text-sm uppercase font-medium">
            <a href="#" className="hover:text-blue-700">Policies</a>
            <a href="#" className="hover:text-blue-700">Privacy Policy</a>
            <a href="#" className="hover:text-blue-700">Terms of Use</a>
            <a href="#" className="hover:text-blue-700">Ombuds</a>
            <a href="#" className="hover:text-blue-700">Site Map</a>
            <a href="#" className="hover:text-blue-700">Glossary</a>
          </div>
          <div className="text-gray-600 text-sm">
            © 2025 Security Council. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
