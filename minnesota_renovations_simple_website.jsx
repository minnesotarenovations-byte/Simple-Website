import React from "react";
import { Phone, Mail, CheckCircle, Handshake, Hammer, ClipboardList } from "lucide-react";

const logoSrc = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAkLCgoLDhgQDQwMDhENDg0NFxUZGBYVFiEaIysjHR0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8oIigvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAQABAAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EAD8QAAEDAgQDBgMGBgEEAwAAAAEAAhEDIQQSMUEFUWEicYGRBhMyobHB8BQjQlJy0eEVYnKiM2OCskPxc5KyJHPC/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EACMRAQEBAAICAgEEAwAAAAAAAAABAhEDIRIxBEFRExQiYXH/2gAMAwEAAhEDEQA/AP12iiiigCiiigAooooAKKKKACiiigAooooAKKig0AFFFFABRRRQBfLYp2hHGCNDcARBDJ4iK7yHtBV8ls8vXyG4VVJSVFwqRllhKNPXhWnQyFxkS24PZiwlPBFn+Vd45ZFNwSVDa1EeWG8p9Vp0pwlnT1DrxWVFvqEOQYfNkUpIsYct6V3FFFABRRRQBSCiiigAooooA4pR2KmjjmINsTd6GuG5MQZK6GB1tTEqLhH1LHmx2xJhcm4TqWlZaTZ0K3fSbGz4W+c4zpaRU4jaSBcZsA2a0Fj0ugOo3zpzXYyF1or0YsrjlFnj1RQQWQcExBEx0O4Fz1Mt0u6MctSPhVYy7Vt5keK6Io4WyQjcR01WUtEUDw5wS5rEWVrMtxG3kdo7lI0z22GVDWG+O6nHhMkQOLHW0VPwcOaBtdS2dYjcw7rR0jRSt1JfHZ4P9PlQbHyXKbtHKPAoEW6zYabAaQ11vDWTnbGdQfKnJ0fJmZHMC0JkpAlfVHAbmJLG/1uLak+IB0IhzPdP5AsHbeORm8OsM6LI/tbxwW4cv/AC6kMvccDuij0XBQw9/vdr/AOa8CjvY9Sx5aMVYp5HYD6bR20NuU6Vk9lgvvrYrxXpkm5WAUPxXKdv+Ff07iw+DFICgRSXaoJZtsHjcD5x31KZxcMJnplPa77nC3yz6K2U6FgKXqlPiARHsBpbkshcmsyueCMeGvU6dOZs3HSJiBkhDaSJLHf00FHaxphv8A1OFRJ2l7TMlku0Foj2Qv+32X1Xt1Ws+xuSrbUh7ftB6J5rjKj4XVDUkiW6bX/qmLGkV0VGev4inQtFEESjErFjkc1UVGP0pYm6hqWx3IOotIFeRrJ0Tv2lYp7GOGmRTYxKMdsI4CbvU03h3mHL9OUqWS2znmROv3cswlR21vtWhj8VZv8AVbPqv4loEiJM9Gy7+IRk5P+J3YVlO1bjaIEkgAwTqE+a4njOY3MLs69b5Trq3tlfSjHAbnHBm13TftMNYpW1EjS0MiQnLQ8+ioy/4cPeDtGrxhG/iqjTrZmDDB4sAPOhtrRX5/o94kwYkH6H6ab++d/eJ9F3hxCN6aG1j32eFv5RGfqotR8Zk5YMs48bHf4VvBEfDWKKwqaKKKACiiigAooooAKKKKAOIXdW4hmXztUr5FcmWq3sQj3JVKlhHSn6WTWllhhm3BExIcQWzGqTpoWmrEtlUiZi49GAYEwe3FjrN0Vz2m1W8b8/PI0suBL3nGO5nmix1VSz+GU0uST1Wsi0jMsInNsRsm7S5Ogrc3jdnhUkubi5b4Rta78hwTfStXExiiOgpkjDnjg3ZJHnCH5o7pV1F+Gi7jdNCr+0Le0PPi45jQJpDME2vFOqxHfDC5pe+aRpjUBZmCzcX9V0Z5dyq0o3J2ieVCjY0Qpxzj8Vn7wbU7ub5wMvpx8F1FSLqFtn5xIy8VfAbpZsPJnEx5I02GZG5qixU3e1Yw3pqcIPNIvGwtkdJ7Wnwa2QPng43ce4+tQVMiNu7n7vlMjuIzxXTs+YmI3Rr3+11HM9S+qG8zWCJLN+yNkKcmjFvtJCY7g3cNO+tcq8y31vLd/EYRWMxsQiI7hYsc1cFymCEy1zO+uAyPKugfJthB5lQalrW/LH6kxaducX5oJTYOKZzT6Fte3SJVtFvdkYz+KrjaDnfDajDXHC3JnsguFPU+HXqrafIc0sUbb1qWvyfGuHHC2n2l/qWJcx7PhbTCtwtz8wvv8Ae31VyDjUC2OMxqIQWFwQyPVdauL7xRXQ4Q4Hsvxa5BshXC9T4VJJ0VhdiONlAlGc1mqZoYs38E7z4usxTQgdEQg+xtjv+Kuq2+OW7h4eRGRHdg2MpW60/AJ4qCRrwAMaYDgPFXvNCWtv8ALMtc7cFHc5MjHBJHJXfbDoo6gCcUlFFFABRRRQAUUUUAFcNnbBzLC0IsJ0ApdjoDGRzKK4y8I6oaD+KdrQRt2ixwWCJBLEL9Nu7kivpxuOMRaJWCXc9U8hOY+a2TwmkYM8UTa0+ZXgP7XO+ZFHifR8Gsds7Lh5zw1zY4xAD5gPVYeB7Jm2u0FMTPm6DJ/wCT8l0Z9hbbVzEHxyyw/wCi7dy66HCGYJmsZk/DlH09vMTPkvvWcnTHJELhd6KW0u8vqWNsLR7r29RBvveBsXteHJR8vYfWjnApF4RoTY6AG15Vea1VvPUkNab2nd0kKwP0LLMdGqdufo8l8V4NbCHeNB4Y9SJzTqLD4JRkfsY6bHl6EG1p+x5I8yBpY3WHx8BfhWOM+ZSRol7Pz8zM+tc1jTby+wB0B2dT6c1uMFljz3+1v3bHf8AzXnFmiXFkeR1E76G+gFOprApqNT8W25jQd47L9ktD4g2o4weNzDxJ5fQ++qfRb6d0WyZyYmACJp66/NZqDSrLh1tbVtp7Vcw7HceHcavVZ3DGuNwAybHcDqDPwVi9n0bQu0hhxqDtP4PHquG/C7yd5GYgZgToBufpWpUOddVjPtOW7e24fMLO3O9zyf6lLS6wpWE0cby5M10/dUjzWKWNqMJbQZmAjF7TtgAfqth4ldzfqGLBwxeDTuNNLC8l7GcPZvS0l1F0N7IOaD95AbWkPaASPLUe2kBtj/qco8gO4/e80O62xnFe2y+Ido7HHcL4o6GVTLU3Q8QSQAcW16E/TYqnLezx8dD2sDLGZw7QsR4h+gq+Xx0sAJA7OvPhHMTNfhkqEfXBaGqZk1Eq57Jx0gm4u68m++5rO8SHWzZ7dJRjaxh7R3bmt+9m9E4J7BxE2fQ0Op+qwUPmaKKFgooooAKKKKACj/AD0//Suf+XR//JVT/K63Hf8ADfv89f8A4a7yiiikCSWYmZbYbeIdEK5keU1FiIuGbJMOq+q67aXilwr8x3kyYbGzqD7bFxWNpbXEozd20A0YZbknibnx21jpVWyHOsvSC1mT9lcz8pnf5/vt/L8i+fxVY1xzuMMtaRdkDhzHdAzgbXEubc83jGqR6daozXA05g7MZBc3f1mQbKZva0aY0NpBtDPt/U95NFUVGi3e1zR9J0NzY5s7PijGMYvEkO6emgG9CxxgY3QZn4JbdQuDAyOJkjdr/AAMVD8PpV3FI1uEA1Lc//AArDaRw0SiB9t3WcT9196K9hwYyEVqbpVGD5reLOFXaDgKKmu6jj2mpY+ZbBYaXe4dx3TqNVwk+lR+Z4MubbfLlH/1VJItMQ4uyQNo0I1DSCCJOuxg+CqzPkn3+hKxxolhrnzvITMt1vXLdoh0Gpcl4uITDkRQnXUKlsgvfhc74bHvGqrm+XRExscuU6rdopCiqQbntb2tKcnN4j2tJJuOer3AzpJ4ZhUnUrBZTdFvtYBFssYB1NdFjGU7x8M0rABjBgoW/AtJJ0iF5DTg5it43CNKkKpAVC3XPu0TjdEF+Q5anrDdw+C8KquijYwkbn+KXVIuXxeSSbI4ddJzevrXIcGL2u62VPt4S6nKnD1p4LcTCLmVCeYm63uK7xuhyosOjjGF4sXDBjdb1Wsi5MDXwLs4AVNO6ji6CfdZ/TpVgxkZHeQTv3o1UYpbkzjS7W+07mnMaNqD2KXf3vclIucEWYhRifRZ+SF+qxqzksQ8KkydJ3k6ge6yjYbUcZWdundBWikKRIcMJhPMvab2zo68FjvDshzSLY3Ed0cx+PZXflsuIpm0OLepL0j2FasUAUUUUAFFFFABRRRQB0OmA5W0C3HN9uuk+cK4QxQyBzby7ao3lXh14qq68ghoUPKm1U7SFeKZNVrL4X9SJ1wvZucYF4Np7wB8Ogr8FCa08aTn3f9FiuJtB2hGXfJktx3aTVM2BhagHlr1kvTKr4hmW7S3jIgSp87nC6ok21sb2ujexg2H2g7M0/d9N00YGwGWSOZQ1Uo0JV23DXWgXqsZ14lBTphYw+I4c4ZQ08cLnzUr5F1Z4XCMIWxwtFzTIudptcUOidA73PbrQcogDWdLDmYO+brkZWtD9QYnx5GN0Uo9t2Xap2CNw3t6cwrwiBLYgeJ4gbdkqzviJjFQbP2b2fOIp8DRj1alrm0e19msnqi2fmJcgC+CueAV+bqPrd4uPryV5NuoOM8buoTf4ueqUlmhNx3geRj7NrjXYYUcrGhJ7NztyU+yBsaR315QIkcpPqUley2cPI1LnaCSTqra6K5jTRlFtLrRvN3K7WPUpFzDp0I6hsLQeEr5vXx0GHUgtYBUc0vAqprXvbtU4g7OBLR7fVU8Nn0pDoVMpuGFGypCKE4J+yswNzJdTZ1nvBqOuNGYgqezA/7v7zJf5kRGqpjg5/0oyrWF6Yxw2CiLHRbUkT+j2udFXNcWvD6HaFAMcQeGTcne0+7vqtF2yRh7Agk8OSvaMvGWD9Kx4cdBstY3kzUWSTbMSRrRO7kcJltx2FcttN0Tk2xwCRBFXTwz4cRmrNJ87hmkvMgNcuoAHdYYOJ1K8T2j9K7YyAAAggAHYEEV3hRQaKKKACiiigAooqGLe1kjk8Eaky6LctOf6H0qWj0HcGAGoV3h8pNNN2m51ozzm5QwJfwSoN1W2tqyBc6DeJc037rwdVhJLldYK4NRQoLdRx+Q/JbS7tTQ0WjN5zWT5nSdVpEN2H2h+jS+UcF+0NQOI5GM7fKV8Iny/5T/BXOUgzXdXm3Mrl4pcZN75mzov2m4maGm7fRVUL1EBN0n0BnnqiTeLnMuYsA2guDWtiDdeYlBHtJ3HAhdj8hrBbf3m8kxC4m6rnWAkuMehRNsa8lU1J4QDeGZmW0g2IdVwnQXG+ulcx16GBRpoQBpyCLbdu67h2XzVVs5r05TJjHlaGlv4IVj9iP8dwefsp/gJXjBmrRKlWs6q5wzU4N5wH/Icez6O+guQqzHlK4UbK3M5xoNUA4Zd+jWtHFK3g7zTZ5OepvnVPJ0qu2hTAFfefCvTyiK2XA85BEyDY29b2vMtnECAezLd+MvSuJxKlbsiUTK00Qve0F2r6qLxPYWQfh2TrCJnmt7rTS5t9NCxV1YYeRsDaa1rO0gQewCm0KyhuCo0FurSXE3yxLcPGBFyIfkupyRhGL3Y4WEnVcxL3Oh1gf/C+VV7b4xO3+IgueAd0cKtqwm50Q22+S4wm6lVWEKZ9MyMpkOZ2i7jIIHkPrVfnfLK6wtAsWjlU8N2xYwucAW1wcTb4qAjxf18FNFjPMx4Hq48kz3BNjqC7b+Keh4SJMXML6bGNmYrgaU4cZZ1YVOorJjDA4WhSnkhBMAxYBtFrEFq/wCVNrtN4i+6XTgbjQpVvZC06DnKOm60AGle7oo9xyKO5xs1Y7slWFFQ1hvlw4zL81oxB7QiR3BrPW/lCQKws2suqfbzx+sQp7v4usmn6VQZtcO7KEq4dphjRLWD3wW8yO4WfrQ9mOSJiwg8rRqVHy4enK7ZJflPOBkFSzCiiigAooooAKKKKAJJLMTMugG3iHRBsT5TpqXERcM2SYdV9UK7oV4ZcK/Md5MmCHtN0q5yyxStWzwF/0myHjP9ssb3/PdXNYvvpxPnuJFyRfgj/VRwq4JyLx4uzXZn5QX1XdVjPGlZf6n7MGlpvg9yltTizXJu1DafKuYs5DqR+8ZYngFj7RTmqbXiRvb8zWnK7Z39ynHpQXNTto4nNyg9mURp3QB8rBlBMT9lz8Vf8ATlIjGT8kkIMqh97uuy9Kn1U8X3rg6Mg8Pxb9cibWIHdT4KnPWHeb2EcOKoxSNMKcQJjZXjp94nOnbctiG3A7oM2OeBv7r5qpcGs0CDxDhGB7eK3zK/DZirxbgA/gxWlXOhluuTXeAMV0F9Qi8OCIZBUd91APgq7eC3FUKxF8d8VdPs6hVW7R3h/3VXb4NNrKLa1rQGBFxpsNRtcCTrt3QV1OI2OxE7u52M8blzrl+CNq8n0noPfBzoxXGxtRFtV2EePHd2kb6byHqq6uJtY+M5U+FxMyQAsaZh2soUbfBfNdbZqGOy3tIZWNw/NOgkYJgt5QqpX/ZDj4BTdWo4HCQ3b+JFzoJPcPssV0k9zHzK06joJpUk/h1KF7YSs6mpNj3vyjynVNeGV83m/ZhrXOG6Jp7wdb/AHu7Cs48WhN7/pqAUC9lFi9dwRhELsU5C4B4tu5r+3qrUjDAaaVDDrYLO9z/AEK/DLiD+zFYQprhrhUKluPexnMgLCOMjbgkDVXnAY4oZ5w3MdjBE8TpXsOZ1yrPFGTQNj3amfCpdj2jnxj59tWN04/YTR+Z54zAifL5LPMTl1ve0+/ZUtBcUoNdzwDxYzYmP+9sPh86wBxN8gsOa42HM+JIG6t1YdY+4K6woooAKKKKACiiigDgtJAxw4L9vVSdb9HSqx2ymBTHAo6tsTGLAOIJ2vMNN2gjwmN29y8Ojo4C2aXvc9Ojz0HSMRk5RckAAETG2i9gm5O88OzqVQWBYkO1hLjYRmO+jRPoOBQTGjxYRvSe3/AHeU09al+oTKTsvPczjpqBsO1AB5QfBFLm1sJ7KYteUuAGywBa+4HvpXC4tFTw0ePOQ5wyxjiIe6sEa9q6u0l3Hu/Y+FV1CpBgUeMSPOhp9TCXZ8rnIc9PJdFN7W9Pzh5ua2s7bPDiN48hynUbXHiDhMTw2DjRY7Zu8NGkF/srhuhwdRJ9OmFGNEBvbm46zV5rRjt6Lh31FfMg9KCwvtBrx0HL1DvtuOlbHv3By7kGDhrKgx8LS3M99k6PKdQg6EezOI5fpa+3zzQrskFUMEmTY/9jgqXjlOkrqr43OmZ1kM/Tb9OH0qVihxyXgy/eM6fx+K+IIXsbxYMQwOz7VafqnJNRNsPIadXxHFcpK14YtMnDko2m66Xf78l6cFkd+E1qIRbcTAQexHN3VFtNVztqY9mkvWyvK5zlV1BXtIfvaOrxJ5hYZtnmR9wY+NRzhMcVHuS/aYvE/hSE+poDcZiPG0gSNx51aXc8BuJMTeBFx78/NaoqWguOHCT3C+zRlHj00A6h2XXiRgflYV1PDGNAmLwmmQGvqtiGEHCfaYgD0a8zP4D2VMpxaIrHKi2r2O2h5mYhfVbJRx2cPWiuv37GdA9ZKzqOx+FBS/JqReR4oc7R+2bppTq55EbmE6rbylYVeBe2Q5ixALk+q3cK6wooooAKKKKACq63cS72E9Ex3WHEbqVG11P+oiKyEx4eIi4W8duzHdepVwdGqRQaKKWFKps1kLC4WuMdjDnvTpVK9dgUNnjEDpLSz4lkrLNGVBcWuDjAx2toO2xpoRpa6TeMrU3D7mWs+PWYXt++5tPoCbg6yvFcx6J4O2e8XtLbS6eOPZB1EOvSTqcdlbTMR2sBYR0uc2XCdJHh06qDmWMcDNggSdiPa3w3qA28Lq5Qgfyf1UkdiIKoRGzGKjfQNN+6CLv1A9FVJrbcps9stkgdwOoIlpT2U4RaZjPdaXEQD5R35FvdlouizGb17fXnWTnlvrEXYZT4vDqqqHJ6Y5r6aFQ2RB87QJNhzKqY7vG6hyoZ8TIJBnvbF2vKJHQ6rqWG2Yie3i2t8mk+4QIPVSvi7tNKMUBOWxni2MiRs6u+a0+4lUPhEMHgD2J9yqoq94b5D4KccfdHDr9qvtaOeMcACTsNlX20qsiotDwdAc+0gyLa1jqOqq9jc+GxxcCRpJym9pJtaeYfmp84mnd+VPOCY97cmQ6VJtUc0UJ4ZGm4ro3hfB2RD+ALZFxe4H+uF6EwMdlsd1bDLt4n5LoK5io5dSreOVH3GPX+t+JGfqraZ92o7TzkfZAvaX7LARoaxcL3eT+iI5rC+D7y3O3Y2jWgR3QJ3XV7Rg8MdijwkXDTfHLhsv+q5vm+uHdahmQdsxIn4g+SlVd8CEaiNnfL57ntp7l1ROqcDQoJwcjX/AMb1RQQK+yXF83vboB1P2XXUFL8ilwooooAKKKKACiiigBqm02S8S4ZRjcZE+JrqKX4USQRkSxRkBFhJ1uP5RTT6ZjyoHTmE3J3ukKrO9mEW0WHE8+aVdZnJFWhtYgs3CfbsD8yui5IPUUjs9uTME6FrPSmPGEOaYTcNJd4ObUBvw3ae6vBTjzQtZsHsc4jXUG2PqpesvlTG4XW/OU86+ixAuHmdF7ahkwt2Mt8VZt/+4W4yqFtx5J8qsOPHqLXGheWNeEqjscJIFjdjW1kflP6rPifRxnp+8/BbrR+JDbRaPus2Ezb6K9h4Zw9m6sljvxJJFpEKVpd5FZyyzBaBqJnRzYbSI8mX8lU0VlvFvj8h4eo0zN5sgekpZZ6Q5uB4OTpdokqnGzMJJ3V1/k2QFHGNinEBiTVefLfxuPmZ+hFH1yhwh/69CPCwoCQ3ZK0lMDjHmsbTAk3Z7fwoF/YCDJd0gjxEVmMpB/Xl/ELae3saDTa27QqALfN+82Tmdz1uxcQNIT9PUAcSBeR2kJw71ysO6CPQpNyTglxbXnCQx40DuJGyPdaLZUhK2X8bI6op80AXEx8WeoZkmbCEYyoD9FrbVhs62d0ytDJsEhF2wF8FUWbV3Ia2ePMNPkyP+Cp1KeZisQXFxcaInwvCyWrI2D+9P6L+m/Fcvp8j3jP4lsdhm5ssTdwGk3BRlHXbVsbui11f3NH8H+VW1D/FALu6MFSbAacORzaNVdQIVNFBooopAooooAKKKKAJR1j5fP9IzJ5I3vWWE+J2Oc70iCpTM3DYHO8wO3Kr7I6UAFFFFABRRRQBy2WQ8YcjIsyDKP4qeyOVwwNw6k8MJ5oyEZ+svSp9/AqZEbBz7WO+fs8quptPMzTXeZoJttrikALwiJ5k8oxHUrB4i+zV+zT82JFBPkOd2vRSIwN+K5e/AaoVnO+y02ieeuTuPUgeS4FCrbcysYPZ2ncOE7A9GSpYhcXJJLSWkPAGxPvGKsGz+wzbt48fFzms9R2sZQ1krPzCX25z5pt/p8uSyIsO1qjuI44ovivIoB6BjY9nwnc1zImStfLZCeO63yTDZXuLwXeBYcDJsFuxrnU6VMG4Z8Ihh5d7tnjmBG7ea4ak+z1L+gLFN04Vckm+RZSuc0a12bZ+FK7VbWM9lpFdvB2qmsCrRYzU3TeOKxqfLVeMOj5KPzHZHqKkkwofrrsZUx/01nXjiLWZnwuA4GT73u9VBHBWLdhEtRE8z2Tc/UruOTyvFqmRrYY7d23lO6DY77sVWAuLYk6BPcOFJKN1HAe99jIo1tJAMeKVrsfaQ6sq2s2rUpvM0B5BJbC4n+K6CiiiimCiiigAooooAKKKKACiiigAooooAKjblTaGUs/CTHfumWPDIt7MAkbPqhQLEuKAJR1j5fK9NzJ5I3vWWE+J2OT7qRBIVdkwZoSRpIB+ziuf6yX6tCsKBfExPJX/AEg6u36L9FFU0NP6WcBmLi6No3maedUpMdoupx0exgJWddtQb2cgBokzXzV+xQoa3+GPFI5wHA8ie+vvp9UWt2owd4YtPTbVXNAwkaQ2+pX1OeCYBuYkEwP2XVMOhlxd4J4dGmxnfVPtvXub9nOx39hrjUCLGubKRzuV8qpoosQxNjm4vMmr9ccWrPDDX1VBEjpaR6nbYwtNy7Mkggu3TV1RVRyOEbY/uj9Wv0Kq1oVcw2UUUUD//2Q==";

export default function MinnesotaRenovationsWebsite() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-6">
        <header className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <div className="flex items-center gap-4">
            <img src={logoSrc} alt="Minnesota Renovations logo" className="h-16 w-16 rounded-xl object-cover" />
            <div>
              <p className="text-xl font-bold tracking-wide">Minnesota Renovations</p>
              <p className="text-sm text-slate-300">Project Facilitation • Contractor Coordination • Client Care</p>
            </div>
          </div>
          <a href="#contact" className="hidden rounded-xl bg-orange-500 px-5 py-3 font-semibold text-black hover:bg-orange-400 md:block">
            Request a Project Review
          </a>
        </header>

        <section className="grid items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-orange-400/40 px-4 py-2 text-sm text-orange-300">
              Trusted project facilitator with 15+ years of industry experience
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Helping clients find the right contractor for the right work.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Minnesota Renovations helps clients clarify their project needs, then matches those needs with the capability of qualified contractors and subcontractors. The goal is simple: clear communication, professional execution, and a client experience built on trust.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#services" className="rounded-xl bg-blue-500 px-6 py-3 text-center font-semibold text-black hover:bg-blue-400">
                How It Works
              </a>
              <a href="#contact" className="rounded-xl border border-white/20 px-6 py-3 text-center font-semibold hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <img src={logoSrc} alt="Minnesota Renovations brand mark" className="mx-auto w-full max-w-md rounded-2xl object-cover" />
          </div>
        </section>

        <section id="services" className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ClipboardList className="mb-4 h-8 w-8 text-orange-400" />
            <h2 className="text-xl font-bold">Discover the Need</h2>
            <p className="mt-3 text-slate-300">
              We listen first, define the project scope, and identify what matters most to the client before work begins.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Hammer className="mb-4 h-8 w-8 text-blue-400" />
            <h2 className="text-xl font-bold">Match the Capability</h2>
            <p className="mt-3 text-slate-300">
              We connect the project need with contractors and subcontractors who have the skill, capacity, and professionalism to perform the work.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Handshake className="mb-4 h-8 w-8 text-emerald-400" />
            <h2 className="text-xl font-bold">Facilitate the Process</h2>
            <p className="mt-3 text-slate-300">
              We support communication between the client and the team so expectations are clear and the experience is handled with care.
            </p>
          </div>
        </section>

        <section className="my-20 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
          <h2 className="text-3xl font-bold">Why clients and contractors work with us</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Over 15 years of construction and renovation industry experience",
              "Trusted and well received by clients, contractors, and subcontractors",
              "Professional teams that show the utmost care for the client",
              "Clear project coordination from first conversation to next steps",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-black/25 p-4">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-400" />
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">A practical bridge between clients and the trades.</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Construction projects can feel overwhelming when the scope is unclear or the wrong team is selected. Minnesota Renovations helps create order by understanding the client’s need, identifying the correct trade capability, and helping move the project forward with clarity.
            </p>
          </div>
          <div id="contact" className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Start a conversation</h2>
            <p className="mt-3 text-slate-300">
              Tell us what you need done, and we will help determine the right next step.
            </p>
            <div className="mt-6 space-y-4">
              <a href="tel:9523033133" className="flex items-center gap-3 rounded-xl bg-black/25 p-4 hover:bg-black/40">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>952-303-3133</span>
              </a>
              <a href="mailto:naomi@mnreno.com" className="flex items-center gap-3 rounded-xl bg-black/25 p-4 hover:bg-black/40">
                <Mail className="h-5 w-5 text-orange-400" />
                <span>naomi@mnreno.com</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Minnesota Renovations. Project facilitation for clients, contractors, and subcontractors.
        </footer>
      </section>
    </main>
  );
}
