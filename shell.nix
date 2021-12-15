{ ...} :

let
    pkgs = import (builtins.fetchTarball {
        name = "nixos-release-21.11";
        url = "https://github.com/NixOS/nixpkgs/archive/a7ecde854aee5c4c7cd6177f54a99d2c1ff28a31.tar.gz";
        sha256 = "162dywda2dvfj1248afxc45kcrg83appjd0nmdb541hl7rnncf02";
    }) {
    };
in pkgs.mkShell {
    buildInputs = [ pkgs.zola ];
}