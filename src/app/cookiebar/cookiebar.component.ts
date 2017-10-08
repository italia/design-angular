import { Component, Input } from '@angular/core';

@Component({
    selector: 'cookiebar',
    templateUrl: './cookiebar.component.ng.html'
})
export class CookieBarComponent {

    @Input() CookieBarItem: CookieBar;
    public displayStyle: string = "hidden";
    public cookieAcepted: string = "cookieAcceptedCookie";

    constructor() { }

    ngOnInit() {
        if (this.getCookie(this.cookieAcepted) == "")
            this.displayStyle = "block";
    }
    public setCookieBtn(): void {
        this.setCookie(this.cookieAcepted, "YES", 365);
        this.displayStyle = "none";
    }

    private setCookie(cname: string, cvalue: string, exdays: number): void {
        var d: Date = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    private getCookie(cname: string): string {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

}

export class CookieBar {
    constructor(
        public description: string,
        public acceptBtnText: string,
        public PrivacyPoliceUrl: string
    ) { }
}
