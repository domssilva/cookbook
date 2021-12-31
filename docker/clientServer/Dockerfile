FROM python

WORKDIR /app

RUN mkdir /app/data

COPY server.py /app

EXPOSE 10000

CMD ["python", "-u", "server.py"]
