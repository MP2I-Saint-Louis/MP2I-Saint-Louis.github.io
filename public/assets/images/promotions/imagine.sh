#!/bin/bash

# Fonction pour afficher l'aide
usage() {
    echo "Usage: $0 [-o <dir>] [-b <color>] <input1> [<input2> ...]"
    echo "  -o <dir>        : Dossier de sortie (obligatoire)"
    echo "  -b <color>      : Couleur de fond (par défaut blanc)"
    echo "  <input1>, ...   : Fichiers ou dossiers d'entrée"
    exit 1
}

# Initialisation des variables
output_dir=""
bg_color="transparent"
quality=90  # Qualité par défaut à 90%

# Traitement des arguments
while getopts "o:b:" opt; do
    case $opt in
        o)
            output_dir="$OPTARG"
            ;;
        b)
            bg_color="$OPTARG"
            ;;
        *)
            usage
            ;;
    esac
done
shift $((OPTIND - 1))

# Vérifier que le dossier de sortie est spécifié
if [ -z "$output_dir" ]; then
    echo "Erreur : Le dossier de sortie (-o) est obligatoire."
    usage
fi

# Créer le dossier de sortie s'il n'existe pas
mkdir -p "$output_dir"

# Fonction pour traiter un fichier
process_file() {
    input_file="$1"
    filename=$(basename "$input_file")
    name_without_extension="${filename%.*}"

    # Recadrer l'image pour tenir dans un carré de 512x512 px avec un fond spécifié
    # Convertir et sauvegarder les fichiers avec une qualité de 90%
    convert "$input_file" -resize 512x512^ -background "$bg_color" -quality $quality "$output_dir/$name_without_extension.avif"
    convert "$input_file" -resize 512x512^ -background "$bg_color" -quality $quality "$output_dir/$name_without_extension.webp"
    convert "$input_file" -resize 512x512^ -background "$bg_color" -quality $quality "$output_dir/$name_without_extension.jpg"
}

# Fonction pour traiter un dossier
process_directory() {
    dir="$1"
    for file in "$dir"/*; do
        if [ -f "$file" ]; then
            process_file "$file"
        fi
    done
}

# Parcours des arguments restants (fichiers et dossiers)
for input in "$@"; do
    if [ -d "$input" ]; then
        process_directory "$input"
    elif [ -f "$input" ]; then
        process_file "$input"
    else
        echo "Erreur : '$input' n'est ni un fichier ni un dossier."
        exit 1
    fi
done

echo "Traitement terminé. Les fichiers sont enregistrés dans '$output_dir'."
