#!/bin/bash

bg_red='\033[41m'
bg_green='\033[42m'
reset_color='\033[0m'

echo -e "${bg_red}start adding...${reset_color}"

git add .

echo -e "${bg_green}add complete${reset_color}"

echo -e "${bg_red}start committing...${reset_color}"

git commit -m "update via git"

echo -e "${bg_green}commit complete${reset_color}"

echo -e "${bg_red}start pushing...${reset_color}"

git push

echo -e "${bg_green}push complete${reset_color}"