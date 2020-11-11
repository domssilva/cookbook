# preparing my new vps for HUNTING!!!
apt-get update
apt-get install unzip -y
apt install golang-go -y

# tools
go get -u github.com/ffuf/ffuf
go get -u github.com/tomnomnom/httprobe
go get -u -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder
git clone https://github.com/danielmiessler/SecLists.git
# https://github.com/michenriksen/aquatone/releases/tag/v1.7.0 get latest release
wget https://github.com/michenriksen/aquatone/releases/download/v1.7.0/aquatone_linux_amd64_1.7.0.zip

# aquatone setup
unzip aquatone_linux_amd64_1.7.0.zip
mv aquatone ./go/bin/
rm aquatone_linux_amd64_1.7.0.zip

export PATH=$PATH:/root/go/bin/

# perl: http server
cpan Plack
plackup -MPlack::App::Directory -e 'Plack::App::Directory->new(root=>".");' -p 8000
